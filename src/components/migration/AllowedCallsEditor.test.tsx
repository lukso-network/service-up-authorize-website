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
});
