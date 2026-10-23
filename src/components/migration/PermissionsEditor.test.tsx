import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PermissionsEditor, type PermissionsEditorProps } from './PermissionsEditor';
import { PERMISSIONS, PERMISSION_PRESETS } from '@/constants/permissions';
import type { AllowedCallEntry, DataKeyEntry } from '@/lib/lsp6/allowedCalls';

const ENTRY: AllowedCallEntry = {
  id: 'c1',
  callTypes: { call: true, staticCall: false, delegateCall: false },
  address: '0x1111111111111111111111111111111111111111',
  useAnyAddress: false,
  interfaceId: '',
  useAnyInterface: true,
  functionInput: '',
  useAnyFunction: true,
};
const KEY: DataKeyEntry = { id: 'k1', name: 'LSP3Profile', key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5', isPreset: true };

type Initial = { permissions: bigint; allowedCalls?: AllowedCallEntry[]; allowedDataKeys?: DataKeyEntry[] };
type Options = Partial<Omit<PermissionsEditorProps, 'permissions' | 'onPermissionsChange' | 'allowedCalls' | 'onAllowedCallsChange' | 'allowedDataKeys' | 'onAllowedDataKeysChange'>>;

function Harness({ initial, options }: { initial: Initial; options: Options }) {
  const [permissions, setPermissions] = useState(initial.permissions);
  const [allowedCalls, setAllowedCalls] = useState(initial.allowedCalls ?? []);
  const [allowedDataKeys, setAllowedDataKeys] = useState(initial.allowedDataKeys ?? []);
  return (
    <>
      <PermissionsEditor
        permissions={permissions}
        onPermissionsChange={setPermissions}
        allowedCalls={allowedCalls}
        onAllowedCallsChange={setAllowedCalls}
        allowedDataKeys={allowedDataKeys}
        onAllowedDataKeysChange={setAllowedDataKeys}
        {...options}
      />
      <output data-testid="state">{`${permissions}|${allowedCalls.length}|${allowedDataKeys.length}`}</output>
    </>
  );
}

function setup(initial: Initial, options: Options = {}) {
  render(<Harness initial={initial} options={{ selector: { defaultTab: 'custom' }, ...options }} />);
  return () => {
    const [p, calls, keys] = screen.getByTestId('state').textContent!.split('|');
    return { permissions: BigInt(p), calls: Number(calls), keys: Number(keys) };
  };
}

const box = (name: RegExp) => screen.getByRole('checkbox', { name });

describe('PermissionsEditor', () => {
  it('replaces a restriction list by a note while its SUPER permission is on', () => {
    setup({ permissions: PERMISSION_PRESETS.STANDARD_WALLET });
    expect(screen.getByText(/this controller can call any contract without restrictions/)).toBeInTheDocument();
    expect(screen.getByText(/this controller can write to any data key without restrictions/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Add Allowed Call Entry/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /Add Custom Data Key/ })).toBeNull();
  });

  it('by default ticks CALL and SETDATA when restrictions are added (the authorize page)', () => {
    const state = setup({ permissions: PERMISSIONS.SIGN });
    fireEvent.click(screen.getByRole('button', { name: /Add Allowed Call Entry/ }));
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(state()).toEqual({ permissions: PERMISSIONS.SIGN | PERMISSIONS.CALL | PERMISSIONS.SETDATA, calls: 1, keys: 1 });
  });

  it('never changes a permission on its own when automatic adjustment is off', () => {
    const state = setup({ permissions: PERMISSIONS.SIGN }, { autoAdjustPermissions: false });
    fireEvent.click(screen.getByRole('button', { name: /Add Allowed Call Entry/ }));
    fireEvent.click(screen.getByRole('button', { name: 'LSP3Profile' }));
    expect(state()).toEqual({ permissions: PERMISSIONS.SIGN, calls: 1, keys: 1 });
  });

  it('asks before SUPER_CALL replaces the allowed calls: cancel keeps them, confirm clears them', async () => {
    const state = setup({ permissions: PERMISSIONS.CALL, allowedCalls: [ENTRY] }, { autoAdjustPermissions: false });
    fireEvent.click(box(/^Super Call/));
    expect(await screen.findByText('Enable SUPER_CALL?')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(screen.queryByText('Enable SUPER_CALL?')).toBeNull());
    expect(state()).toEqual({ permissions: PERMISSIONS.CALL, calls: 1, keys: 0 });

    fireEvent.click(box(/^Super Call/));
    fireEvent.click(await screen.findByRole('button', { name: /Enable & Clear Entries/ }));
    await waitFor(() => expect(state()).toEqual({ permissions: PERMISSIONS.CALL | PERMISSIONS.SUPER_CALL, calls: 0, keys: 0 }));
  });

  it('asks before SUPER_SETDATA replaces the data keys', async () => {
    const state = setup({ permissions: PERMISSIONS.SETDATA, allowedDataKeys: [KEY] });
    fireEvent.click(box(/^Super Set Data/));
    expect(await screen.findByText('Enable SUPER_SETDATA?')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Enable & Clear Entries/ }));
    await waitFor(() => expect(state()).toEqual({ permissions: PERMISSIONS.SETDATA | PERMISSIONS.SUPER_SETDATA, calls: 0, keys: 0 }));
  });

  it('passes the options on to the selector and both editors', () => {
    setup(
      { permissions: PERMISSIONS.CALL | PERMISSIONS.TRANSFERVALUE, allowedCalls: [{ ...ENTRY, callTypes: { ...ENTRY.callTypes, transferValue: true } }] },
      {
        selector: { defaultTab: 'custom', unavailable: ['CHANGEOWNER'], title: 'What the agent may do' },
        callTypes: ['transferValue', 'call', 'staticCall'],
        summarizeCall: () => 'Send LYX to a friend',
        excludeDataKeyPresets: ['LSP17Extension'],
      },
    );
    expect(screen.getByText('What the agent may do')).toBeInTheDocument();
    expect(screen.queryByRole('checkbox', { name: /^Change Owner/ })).toBeNull();
    expect(screen.getByText('Send LYX to a friend')).toBeInTheDocument();
    fireEvent.click(screen.getByText('#1'));
    expect(screen.getByRole('checkbox', { name: /^Transfer Value ?\(Send LYX\)/ })).toBeChecked();
    expect(screen.queryByRole('checkbox', { name: /^Delegate Call ?\(/ })).toBeNull();
    expect(screen.queryByRole('button', { name: /LSP17 Extensions/ })).toBeNull();
  });

  it('disables every control while disabled', () => {
    setup({ permissions: PERMISSIONS.CALL, allowedCalls: [ENTRY], allowedDataKeys: [KEY] }, { disabled: true });
    fireEvent.click(screen.getByText('#1'));
    for (const checkbox of screen.getAllByRole('checkbox')) expect(checkbox).toBeDisabled();
    expect(screen.getByRole('button', { name: /Add Allowed Call Entry/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Add Custom Data Key/ })).toBeDisabled();
  });
});
