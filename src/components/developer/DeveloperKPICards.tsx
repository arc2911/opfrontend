import React from 'react';
import { sampleKPIData } from '@/data/developerData';
import { DeveloperKPIData } from '@/types/developer';

interface DeveloperKPICardsProps {
  kpiData?: DeveloperKPIData;
}

export const DeveloperKPICards: React.FC<DeveloperKPICardsProps> = ({
  kpiData = sampleKPIData,
}) => {
  const formatCount = (count: number | null | undefined) => {
    if (count === null || count === undefined) {
      return (
        <span className="text-sm font-medium text-slate-400">
          Not available yet
        </span>
      );
    }
    return count;
  };

  const cards = [
    {
      label: 'Assigned to Me',
      value: formatCount(kpiData.assignedToMe?.count),
      subtitle: kpiData.assignedToMe?.subtitle || 'Not available yet',
      subtitleColor: 'text-[#0284C7]',
    },
    {
      label: 'Due Soon',
      value: formatCount(kpiData.dueSoon?.count),
      subtitle: kpiData.dueSoon?.subtitle || 'Not available yet',
      subtitleColor: 'text-[#2563EB]',
    },
    {
      label: 'Overdue',
      value: formatCount(kpiData.overdue?.count),
      subtitle: kpiData.overdue?.subtitle || 'Not available yet',
      subtitleColor: 'text-[#DC2626]',
    },
    {
      label: 'Completed',
      value: formatCount(kpiData.completed?.count),
      subtitle: kpiData.completed?.subtitle || 'Not available yet',
      subtitleColor: 'text-[#059669]',
    },
  ];

  return (
    <section aria-label="Developer Key Metrics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between"
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {card.label}
          </div>

          <div className="text-3xl font-bold text-slate-900 tracking-tight my-2.5">
            {card.value}
          </div>

          <div className={`text-xs font-medium ${card.subtitleColor}`}>
            {card.subtitle}
          </div>
        </div>
      ))}
    </section>
  );
};
