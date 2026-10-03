import React from 'react';
import { cn } from '@/lib/utils';
import { StatusBadge, BadgeVariant } from '@/components/ui/StatusBadge';

interface MetricCardProps {
  label: string;
  value: string | number;
  badgeText: string;
  badgeVariant: BadgeVariant;
  onClick?: () => void;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  badgeText,
  badgeVariant,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between transition-all duration-150',
        onClick && 'hover:border-slate-300 hover:shadow-sm cursor-pointer',
        className
      )}
    >
      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>

      <div className="text-3xl font-bold text-slate-900 tracking-tight my-2.5">
        {value}
      </div>

      <div className="flex items-center">
        <StatusBadge variant={badgeVariant} text={badgeText} showDot={true} />
      </div>
    </div>
  );
};
