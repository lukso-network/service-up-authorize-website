import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AllowedDataKeysEditor } from './AllowedDataKeysEditor';
import { DATA_KEY_PRESETS } from '@/constants/allowedCalls';

describe('AllowedDataKeysEditor', () => {
  it('offers every preset by default and adds one', () => {
    const onChange = vi.fn();
    render(<AllowedDataKeysEditor entries={[]} onChange={onChange} />);
    expect(screen.getByRole('button', { name: 'LSP1 Universal Receiver Delegate' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /LSP17 Extensions/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(onChange).toHaveBeenCalledWith([expect.objectContaining({ name: 'LSP3Profile', key: DATA_KEY_PRESETS.LSP3Profile.key, isPreset: true })]);
  });

  it('does not offer excluded presets, nor a group left empty', () => {
    render(<AllowedDataKeysEditor entries={[]} onChange={vi.fn()} excludePresets={['LSP1UniversalReceiverDelegate', 'LSP17Extension']} />);
    expect(screen.queryByRole('button', { name: 'LSP1 Universal Receiver Delegate' })).toBeNull();
    expect(screen.queryByRole('button', { name: /LSP17 Extensions/ })).toBeNull();
    expect(screen.queryByText('Advanced')).toBeNull();
    expect(screen.getByRole('button', { name: 'LSP3Profile' })).toBeInTheDocument();
  });
});
