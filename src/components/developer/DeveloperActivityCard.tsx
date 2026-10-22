import React from 'react';
import { sampleRecentActivity } from '@/data/developerData';
import { RecentActivityItem } from '@/types/developer';

interface DeveloperActivityCardProps {
  activities?: RecentActivityItem[];
}

export const DeveloperActivityCard: React.FC<DeveloperActivityCardProps> = ({
  activities = sampleRecentActivity,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="text-sm font-semibold text-slate-900">
            Recent Activity
          </h3>
          <span className="text-[10px] uppercase font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
            SAMPLE
          </span>
        </div>

        {/* Timeline List */}
        <div className="space-y-3 mt-2">
          {activities.map((item) => (
            <div
              key={item.id}
              className="pb-2.5 border-b border-slate-100 last:border-b-0 last:pb-0"
            >
              <div className="text-xs font-semibold text-slate-900">
                {item.taskId} · {item.actionText}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {item.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
