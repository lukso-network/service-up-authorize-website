import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PermissionSelector } from './PermissionSelector';
import { PERMISSIONS, PERMISSION_PRESETS } from '@/constants/permissions';

const openCustomTab = () => fireEvent.mouseDown(screen.getByRole('tab', { name: 'Custom' }));

describe('PermissionSelector', () => {
  it('starts on the presets and offers every permission by default', () => {
    render(<PermissionSelector permissions={PERMISSION_PRESETS.STANDARD_WALLET} onPermissionsChange={vi.fn()} />);
    expect(screen.getByText('Select the permissions to grant to the new controller')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Presets' })).toHaveAttribute('data-state', 'active');
    expect(screen.getByRole('button', { name: /Full Control/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Standard Wallet/ })).toBeInTheDocument();
    openCustomTab();
    expect(screen.getAllByRole('checkbox')).toHaveLength(Object.keys(PERMISSIONS).length);
    expect(screen.getByText('Account Control')).toBeInTheDocument();
    expect(screen.getAllByText('Sensitive').length).toBeGreaterThan(0);
  });

  it('toggles one permission', () => {
    const onChange = vi.fn();
    render(<PermissionSelector permissions={PERMISSIONS.CALL} onPermissionsChange={onChange} defaultTab="custom" />);
    fireEvent.click(screen.getByRole('checkbox', { name: /^Sign Messages/ }));
    expect(onChange).toHaveBeenCalledWith(PERMISSIONS.CALL | PERMISSIONS.SIGN);
  });

  it('can start on the custom tab, with its own title, description and footer', () => {
    render(
      <PermissionSelector
        permissions={PERMISSIONS.CALL}
        onPermissionsChange={vi.fn()}
        defaultTab="custom"
        title="What the agent may do"
        description="Prefilled from the link"
        footer={<p>footer note</p>}
      />,
    );
    expect(screen.getByRole('tab', { name: 'Custom' })).toHaveAttribute('data-state', 'active');
    expect(screen.getByRole('checkbox', { name: /^Call Call contracts/ })).toBeChecked();
    expect(screen.getByText('What the agent may do')).toBeInTheDocument();
    expect(screen.getByText('Prefilled from the link')).toBeInTheDocument();
    expect(screen.getByText('footer note')).toBeInTheDocument();
  });

  it('does not offer unavailable permissions, empty groups or presets that include one', () => {
    render(
      <PermissionSelector
        permissions={PERMISSIONS.CALL}
        onPermissionsChange={vi.fn()}
        unavailable={['CHANGEOWNER', 'ADDCONTROLLER', 'EDITPERMISSIONS', 'ADDEXTENSIONS']}
      />,
    );
    expect(screen.queryByRole('button', { name: /Full Control/ })).toBeNull();
    expect(screen.getByRole('button', { name: /Standard Wallet/ })).toBeInTheDocument();
    openCustomTab();
    expect(screen.queryByRole('checkbox', { name: /^Change Owner/ })).toBeNull();
    expect(screen.queryByText('Account Control')).toBeNull();
    expect(screen.getByRole('checkbox', { name: /^Change Extensions/ })).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(Object.keys(PERMISSIONS).length - 4);
  });

  it('shows the given wording, badge and code for a permission', () => {
    render(
      <PermissionSelector
        permissions={0n}
        onPermissionsChange={vi.fn()}
        defaultTab="custom"
        describe={(key) => ({ label: `Plain ${key}`, description: `Means ${key}`, badge: { label: 'High risk', variant: 'destructive' }, code: key, danger: key === 'SIGN' })}
      />,
    );
    const sign = screen.getByRole('checkbox', { name: /^Plain SIGN\s?High risk Means SIGN SIGN$/ });
    expect(sign).not.toBeChecked();
    expect(sign.closest('label')).toHaveClass('border-destructive');
    expect(screen.getByRole('checkbox', { name: /^Plain CALL/ }).closest('label')).not.toHaveClass('border-destructive');
    expect(screen.queryByText('Sensitive')).toBeNull();
  });
});
