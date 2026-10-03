import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'overdue'
  | 'blocked'
  | 'progress'
  | 'milestone'
  | 'connected'
  | 'amber'
  | 'grounded'
  | 'neutral';

interface StatusBadgeProps {
  variant: BadgeVariant;
  text: string;
  showDot?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  variant,
  text,
  showDot = false,
  className,
}) => {
  const variantStyles: Record<BadgeVariant, { bg: string; text: string; dot: string }> = {
    overdue: {
      bg: 'bg-[#FEE2E2]',
      text: 'text-[#DC2626]',
      dot: 'bg-[#DC2626]',
    },
    blocked: {
      bg: 'bg-[#FEF3C7]',
      text: 'text-[#D97706]',
      dot: 'bg-[#D97706]',
    },
    progress: {
      bg: 'bg-[#ECFDF5]',
      text: 'text-[#059669]',
      dot: 'bg-[#059669]',
    },
    milestone: {
      bg: 'bg-[#EFF6FF]',
      text: 'text-[#2563EB]',
      dot: 'bg-[#2563EB]',
    },
    connected: {
      bg: 'bg-[#ECFDF5]',
      text: 'text-[#059669]',
      dot: 'bg-[#059669]',
    },
    amber: {
      bg: 'bg-[#FEF3C7]',
      text: 'text-[#D97706]',
      dot: 'bg-[#D97706]',
    },
    grounded: {
      bg: 'bg-[#EFF6FF]',
      text: 'text-[#2563EB]',
      dot: 'bg-[#2563EB]',
    },
    neutral: {
      bg: 'bg-slate-100',
      text: 'text-slate-600',
      dot: 'bg-slate-400',
    },
  };

  const style = variantStyles[variant] || variantStyles.neutral;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-tight',
        style.bg,
        style.text,
        className
      )}
    >
      {showDot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', style.dot)} />}
      <span>{text}</span>
    </span>
  );
};
