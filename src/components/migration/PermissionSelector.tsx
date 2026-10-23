'use client';

import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  PERMISSIONS,
  PERMISSION_LABELS,
  PERMISSION_DESCRIPTIONS,
  PERMISSION_GROUPS,
  PERMISSION_PRESETS,
  PRESET_LABELS,
  PRESET_DESCRIPTIONS,
  hasPermission,
  togglePermission,
  type PermissionKey,
  type PresetKey,
} from '@/constants/permissions';

/** Wording for one permission row, replacing the default label and description. */
export interface PermissionText {
  label: string;
  description: string;
  /** Shown next to the label instead of the "Sensitive" badge. */
  badge?: { label: string; variant: 'outline' | 'secondary' | 'destructive' };
  /** Shown in small monospace under the description (for example the LSP6 name). */
  code?: string;
  /** Marks the row like a sensitive permission. */
  danger?: boolean;
}

export interface PermissionSelectorProps {
  permissions: bigint;
  onPermissionsChange: (permissions: bigint) => void;
  disabled?: boolean;
  title?: string;
  description?: string;
  defaultTab?: 'presets' | 'custom';
  /** Permissions this page does not offer; presets that include one are not offered either. */
  unavailable?: readonly PermissionKey[];
  describe?: (key: PermissionKey) => PermissionText;
  /** Rendered inside the card, below the tabs. */
  footer?: ReactNode;
}

export function PermissionSelector({
  permissions,
  onPermissionsChange,
  disabled = false,
  title = 'Permissions',
  description = 'Select the permissions to grant to the new controller',
  defaultTab = 'presets',
  unavailable = [],
  describe,
  footer,
}: PermissionSelectorProps) {
  const offered = (key: PermissionKey) => !unavailable.includes(key);
  const presets = (Object.keys(PERMISSION_PRESETS) as PresetKey[]).filter((preset) =>
    unavailable.every((key) => !hasPermission(PERMISSION_PRESETS[preset], PERMISSIONS[key]))
  );
  const groups = Object.entries(PERMISSION_GROUPS)
    .map(([group, perms]) => [group, perms.filter(({ key }) => offered(key))] as const)
    .filter(([, perms]) => perms.length > 0);

  const handleToggle = (key: PermissionKey) => {
    if (disabled) return;
    const newPermissions = togglePermission(permissions, PERMISSIONS[key]);
    onPermissionsChange(newPermissions);
  };

  const handlePresetSelect = (preset: PresetKey) => {
    if (disabled) return;
    onPermissionsChange(PERMISSION_PRESETS[preset]);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="presets" className="space-y-3 mt-4">
            {presets.map((preset) => {
              const isSelected = permissions === PERMISSION_PRESETS[preset];
              return (
                <button
                  key={preset}
                  onClick={() => handlePresetSelect(preset)}
                  disabled={disabled}
                  className={`
                    w-full p-4 rounded-lg border text-left transition-colors
                    ${isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{PRESET_LABELS[preset]}</p>
                      <p className="text-sm text-muted-foreground">
                        {PRESET_DESCRIPTIONS[preset]}
                      </p>
                    </div>
                    {isSelected && (
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </TabsContent>

          <TabsContent value="custom" className="space-y-6 mt-4">
            {groups.map(([group, perms]) => (
              <div key={group} className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">{group}</h4>
                <div className="space-y-1">
                  {perms.map(({ key, danger: sensitive }) => {
                    const isChecked = hasPermission(permissions, PERMISSIONS[key]);
                    const text = describe?.(key);
                    const danger = text?.danger ?? sensitive;
                    return (
                      <label
                        key={key}
                        className={`
                          flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors
                          ${isChecked ? 'bg-primary/5' : 'hover:bg-muted'}
                          ${danger ? 'border-l-2 border-destructive' : ''}
                          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggle(key)}
                          disabled={disabled}
                          className="mt-1 h-4 w-4 rounded border-border"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium">
                              {text?.label ?? PERMISSION_LABELS[key]}
                            </span>
                            {text?.badge ? (
                              <Badge variant={text.badge.variant} className="text-xs">
                                {text.badge.label}
                              </Badge>
                            ) : danger && (
                              <Badge variant="destructive" className="text-xs">
                                Sensitive
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {text?.description ?? PERMISSION_DESCRIPTIONS[key]}
                          </p>
                          {text?.code && (
                            <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">{text.code}</p>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
        {footer}
      </CardContent>
    </Card>
  );
}
