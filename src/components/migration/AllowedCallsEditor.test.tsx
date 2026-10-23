import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AllowedCallsEditor } from './AllowedCallsEditor';
import type { AllowedCallEntry } from '@/lib/lsp6/allowedCalls';

const wildcard: AllowedCallEntry = {
  id: 'e1',
  callTypes: { call: true, staticCall: false, delegateCall: false },
  address: '',
  useAnyAddress: true,
  interfaceId: '',
  useAnyInterface: true,
  functionInput: '',
  useAnyFunction: true,
};

function open(entries: AllowedCallEntry[]) {
  render(<AllowedCallsEditor entries={entries} onChange={vi.fn()} />);
  fireEvent.click(screen.getByText('#1'));
}

describe('AllowedCallsEditor', () => {
  it('says that an empty list allows no calls for the restricted Call permission', () => {
    render(<AllowedCallsEditor entries={[]} onChange={vi.fn()} />);
    expect(screen.getByText(/with Call but no entries it can call nothing/i)).toBeInTheDocument();
  });

  it('warns that an any-address, any-standard, any-function entry is rejected by LSP6', () => {
    open([wildcard]);
    expect(screen.getByText(/rejected by LSP6/i)).toBeInTheDocument();
  });

  it('does not warn once one field is restricted', () => {
    open([{ ...wildcard, useAnyAddress: false, address: '0x1111111111111111111111111111111111111111' }]);
    expect(screen.queryByText(/rejected by LSP6/i)).toBeNull();
  });

  it('offers Call, Static Call and Delegate Call by default', () => {
    open([wildcard]);
    expect(screen.getAllByRole('checkbox', { name: /^(Call|Static Call|Delegate Call|Transfer Value) ?\(/ }).map((c) => c.closest('label')?.textContent)).toEqual([
      'Call(Execute transactions)',
      'Static Call(Read-only queries)',
      'Delegate Call(Dangerous)',
    ]);
  });

  it('offers the call types it is given, and counts transfer value as one', () => {
    const onChange = vi.fn();
    const pay: AllowedCallEntry = { ...wildcard, callTypes: { transferValue: true, call: false, staticCall: false, delegateCall: false }, useAnyAddress: false, address: '0x1111111111111111111111111111111111111111' };
    render(<AllowedCallsEditor entries={[pay]} onChange={onChange} callTypes={['transferValue', 'call', 'staticCall']} />);
    fireEvent.click(screen.getByText('#1'));
    expect(screen.queryByRole('checkbox', { name: /^Delegate Call/ })).toBeNull();
    expect(screen.queryByText(/at least one call type/i)).toBeNull();
    const value = screen.getByRole('checkbox', { name: /^Transfer Value ?\(Send LYX\)/ });
    expect(value).toBeChecked();
    fireEvent.click(value);
    expect(onChange).toHaveBeenCalledWith([{ ...pay, callTypes: { ...pay.callTypes, transferValue: false } }]);
  });

  it('shows the summary it is given for an entry, and its own otherwise', () => {
    const summarize = (e: AllowedCallEntry) => (e.id === 'e1' ? 'Send LYX to a friend' : null);
    render(<AllowedCallsEditor entries={[wildcard, { ...wildcard, id: 'e2' }]} onChange={vi.fn()} summarize={summarize} />);
    // a given summary wraps instead of being cut off; the built-in one stays on one line
    expect(screen.getByText('Send LYX to a friend')).not.toHaveClass('truncate');
    expect(screen.getByText('CALL → any address')).toHaveClass('truncate');
  });
});
