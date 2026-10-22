import React from 'react';
import { sampleUpcomingDeadlines } from '@/data/developerData';
import { UpcomingDeadlineItem } from '@/types/developer';

interface DeveloperDeadlinesCardProps {
  deadlines?: UpcomingDeadlineItem[];
}

export const DeveloperDeadlinesCard: React.FC<DeveloperDeadlinesCardProps> = ({
  deadlines = sampleUpcomingDeadlines,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="text-sm font-semibold text-slate-900">
            Upcoming Deadlines
          </h3>
          <span className="text-[10px] uppercase font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
            SAMPLE
          </span>
        </div>

        {/* List of Deadlines */}
        <div className="space-y-3 mt-2">
          {deadlines.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-100 last:border-b-0 last:pb-0"
            >
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-900 truncate">
                  {item.id} {item.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.project} · {item.dateText}
                </div>
              </div>

              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded shrink-0 ${
                  item.status === 'In progress'
                    ? 'bg-[#E0F2FE] text-[#0284C7]'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
