import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number; // 0 to 100
  color?: string;
  height?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'bg-[#0284C7]',
  height = 'h-2',
  className,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn('w-full bg-slate-200/90 rounded-full overflow-hidden', height, className)}>
      <div
        className={cn('h-full transition-all duration-500 ease-out rounded-full', color)}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};
