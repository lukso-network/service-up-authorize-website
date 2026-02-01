'use client';

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

interface PermissionSelectorProps {
  permissions: bigint;
  onPermissionsChange: (permissions: bigint) => void;
  disabled?: boolean;
}

export function PermissionSelector({
  permissions,
  onPermissionsChange,
  disabled = false,
}: PermissionSelectorProps) {
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
        <CardTitle>Permissions</CardTitle>
        <CardDescription>
          Select the permissions to grant to the new controller
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="presets" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="presets" className="space-y-3 mt-4">
            {(Object.keys(PERMISSION_PRESETS) as PresetKey[]).map((preset) => {
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
            {Object.entries(PERMISSION_GROUPS).map(([group, perms]) => (
              <div key={group} className="space-y-2">
                <h4 className="font-medium text-sm text-muted-foreground">{group}</h4>
                <div className="space-y-1">
                  {perms.map(({ key, danger }) => {
                    const isChecked = hasPermission(permissions, PERMISSIONS[key]);
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
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {PERMISSION_LABELS[key]}
                            </span>
                            {danger && (
                              <Badge variant="destructive" className="text-xs">
                                Sensitive
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {PERMISSION_DESCRIPTIONS[key]}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
