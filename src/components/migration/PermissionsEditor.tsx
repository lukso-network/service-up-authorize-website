'use client';

import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PermissionSelector, type PermissionSelectorProps } from '@/components/migration/PermissionSelector';
import { AllowedCallsEditor, type CallTypeKey } from '@/components/migration/AllowedCallsEditor';
import { AllowedDataKeysEditor } from '@/components/migration/AllowedDataKeysEditor';
import { PERMISSIONS, hasPermission } from '@/constants/permissions';
import type { AllowedCallEntry, DataKeyEntry } from '@/lib/lsp6/allowedCalls';

export interface PermissionsEditorProps {
  permissions: bigint;
  onPermissionsChange: (permissions: bigint) => void;
  allowedCalls: AllowedCallEntry[];
  onAllowedCallsChange: (entries: AllowedCallEntry[]) => void;
  allowedDataKeys: DataKeyEntry[];
  onAllowedDataKeysChange: (entries: DataKeyEntry[]) => void;
  disabled?: boolean;
  /**
   * Tick CALL / SETDATA (and untick SUPER_CALL / SUPER_SETDATA) when restrictions are edited, as the authorize page
   * does. Agent requests turn this off: there a permission only changes when the owner changes it.
   */
  autoAdjustPermissions?: boolean;
  selector?: Omit<PermissionSelectorProps, 'permissions' | 'onPermissionsChange' | 'disabled'>;
  callTypes?: readonly CallTypeKey[];
  summarizeCall?: (entry: AllowedCallEntry) => string | null;
  excludeDataKeyPresets?: readonly string[];
}

/**
 * The permissions section of the authorize page: the permission selector, the AllowedCalls and AllowedERC725YDataKeys
 * editors, and how SUPER_CALL / SUPER_SETDATA interact with them (a SUPER permission replaces its list, after a
 * confirmation when the list has entries).
 */
export function PermissionsEditor({
  permissions,
  onPermissionsChange,
  allowedCalls: allowedCallEntries,
  onAllowedCallsChange,
  allowedDataKeys: allowedDataKeyEntries,
  onAllowedDataKeysChange,
  disabled = false,
  autoAdjustPermissions = true,
  selector,
  callTypes,
  summarizeCall,
  excludeDataKeyPresets,
}: PermissionsEditorProps) {
  // SUPER permission confirmation dialog state
  const [superConfirmDialog, setSuperConfirmDialog] = useState<{
    open: boolean;
    type: 'SUPER_CALL' | 'SUPER_SETDATA';
    pendingPermissions: bigint;
  }>({ open: false, type: 'SUPER_CALL', pendingPermissions: 0n });

  // SUPER permission interaction: when adding AllowedCalls entries, auto-untick SUPER_CALL and ensure CALL
  const handleAllowedCallsChange = useCallback((entries: AllowedCallEntry[]) => {
    onAllowedCallsChange(entries);
    if (autoAdjustPermissions && entries.length > 0) {
      let newPerms = permissions;
      // Remove SUPER_CALL if it's set
      if (hasPermission(newPerms, PERMISSIONS.SUPER_CALL)) {
        newPerms = newPerms ^ PERMISSIONS.SUPER_CALL;
      }
      // Ensure CALL is set
      if (!hasPermission(newPerms, PERMISSIONS.CALL)) {
        newPerms = newPerms | PERMISSIONS.CALL;
      }
      if (newPerms !== permissions) {
        onPermissionsChange(newPerms);
      }
    }
  }, [permissions, autoAdjustPermissions, onAllowedCallsChange, onPermissionsChange]);

  // SUPER permission interaction: when adding AllowedDataKeys entries, auto-untick SUPER_SETDATA and ensure SETDATA
  const handleAllowedDataKeysChange = useCallback((entries: DataKeyEntry[]) => {
    onAllowedDataKeysChange(entries);
    if (autoAdjustPermissions && entries.length > 0) {
      let newPerms = permissions;
      // Remove SUPER_SETDATA if it's set
      if (hasPermission(newPerms, PERMISSIONS.SUPER_SETDATA)) {
        newPerms = newPerms ^ PERMISSIONS.SUPER_SETDATA;
      }
      // Ensure SETDATA is set
      if (!hasPermission(newPerms, PERMISSIONS.SETDATA)) {
        newPerms = newPerms | PERMISSIONS.SETDATA;
      }
      if (newPerms !== permissions) {
        onPermissionsChange(newPerms);
      }
    }
  }, [permissions, autoAdjustPermissions, onAllowedDataKeysChange, onPermissionsChange]);

  // Handle permission changes from PermissionSelector with SUPER interaction
  const handlePermissionsChange = useCallback((newPermissions: bigint) => {
    // Check if SUPER_CALL is being turned ON while AllowedCalls entries exist
    if (
      hasPermission(newPermissions, PERMISSIONS.SUPER_CALL) &&
      !hasPermission(permissions, PERMISSIONS.SUPER_CALL) &&
      allowedCallEntries.length > 0
    ) {
      setSuperConfirmDialog({
        open: true,
        type: 'SUPER_CALL',
        pendingPermissions: newPermissions,
      });
      return;
    }

    // Check if SUPER_SETDATA is being turned ON while AllowedDataKeys entries exist
    if (
      hasPermission(newPermissions, PERMISSIONS.SUPER_SETDATA) &&
      !hasPermission(permissions, PERMISSIONS.SUPER_SETDATA) &&
      allowedDataKeyEntries.length > 0
    ) {
      setSuperConfirmDialog({
        open: true,
        type: 'SUPER_SETDATA',
        pendingPermissions: newPermissions,
      });
      return;
    }

    onPermissionsChange(newPermissions);
  }, [permissions, allowedCallEntries.length, allowedDataKeyEntries.length, onPermissionsChange]);

  // Confirm SUPER permission: clear entries and apply permissions
  const confirmSuperPermission = useCallback(() => {
    if (superConfirmDialog.type === 'SUPER_CALL') {
      onAllowedCallsChange([]);
    } else {
      onAllowedDataKeysChange([]);
    }
    onPermissionsChange(superConfirmDialog.pendingPermissions);
    setSuperConfirmDialog({ open: false, type: 'SUPER_CALL', pendingPermissions: 0n });
  }, [superConfirmDialog, onAllowedCallsChange, onAllowedDataKeysChange, onPermissionsChange]);

  const hasSuperCall = hasPermission(permissions, PERMISSIONS.SUPER_CALL);
  const hasSuperSetData = hasPermission(permissions, PERMISSIONS.SUPER_SETDATA);

  return (
    <>
      {/* Permission Selector - THE AUTHORIZER CHOOSES PERMISSIONS */}
      <PermissionSelector
        {...selector}
        permissions={permissions}
        onPermissionsChange={handlePermissionsChange}
        disabled={disabled}
      />

      {/* AllowedCalls Editor - hidden when SUPER_CALL is enabled */}
      {hasSuperCall ? (
        <Alert>
          <AlertDescription className="text-sm">
            <strong>SUPER_CALL</strong> is enabled — this controller can call any contract without restrictions. AllowedCalls configuration is not needed.
          </AlertDescription>
        </Alert>
      ) : (
        <AllowedCallsEditor
          entries={allowedCallEntries}
          onChange={handleAllowedCallsChange}
          disabled={disabled}
          callTypes={callTypes}
          summarize={summarizeCall}
        />
      )}

      {/* AllowedDataKeys Editor - hidden when SUPER_SETDATA is enabled */}
      {hasSuperSetData ? (
        <Alert>
          <AlertDescription className="text-sm">
            <strong>SUPER_SETDATA</strong> is enabled — this controller can write to any data key without restrictions. AllowedDataKeys configuration is not needed.
          </AlertDescription>
        </Alert>
      ) : (
        <AllowedDataKeysEditor
          entries={allowedDataKeyEntries}
          onChange={handleAllowedDataKeysChange}
          disabled={disabled}
          excludePresets={excludeDataKeyPresets}
        />
      )}

      {/* SUPER Permission Confirmation Dialog */}
      <Dialog
        open={superConfirmDialog.open}
        onOpenChange={(open) => {
          if (!open) {
            setSuperConfirmDialog({ open: false, type: 'SUPER_CALL', pendingPermissions: 0n });
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Enable {superConfirmDialog.type === 'SUPER_CALL' ? 'SUPER_CALL' : 'SUPER_SETDATA'}?
            </DialogTitle>
            <DialogDescription>
              {superConfirmDialog.type === 'SUPER_CALL'
                ? 'Enabling SUPER_CALL bypasses all AllowedCalls restrictions. Your configured AllowedCalls entries will be removed.'
                : 'Enabling SUPER_SETDATA bypasses all AllowedDataKeys restrictions. Your configured AllowedDataKeys entries will be removed.'}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSuperConfirmDialog({ open: false, type: 'SUPER_CALL', pendingPermissions: 0n })}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmSuperPermission}
            >
              Enable &amp; Clear Entries
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
