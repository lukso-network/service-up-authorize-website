'use client';

import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isComplete = index < currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1"
            >
              {/* Connector line */}
              <div className="flex items-center w-full">
                {index > 0 && (
                  <div
                    className={cn(
                      'h-0.5 flex-1 transition-colors',
                      isComplete ? 'bg-primary' : 'bg-muted'
                    )}
                  />
                )}

                {/* Step circle */}
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                    isActive && 'bg-primary text-primary-foreground ring-4 ring-primary/20',
                    isComplete && 'bg-primary text-primary-foreground',
                    !isActive && !isComplete && 'bg-muted text-muted-foreground'
                  )}
                >
                  {isComplete ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'h-0.5 flex-1 transition-colors',
                      index < currentStep ? 'bg-primary' : 'bg-muted'
                    )}
                  />
                )}
              </div>

              {/* Step label */}
              <div className="mt-2 text-center">
                <p
                  className={cn(
                    'text-sm font-medium',
                    isActive && 'text-primary',
                    isComplete && 'text-foreground',
                    !isActive && !isComplete && 'text-muted-foreground'
                  )}
                >
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
