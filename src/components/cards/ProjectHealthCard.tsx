'use client';

import React from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useDashboardStore } from '@/store/useDashboardStore';
import { initialProjectHealth } from '@/data/mockData';

export const ProjectHealthCard: React.FC = () => {
  const { metrics } = useDashboardStore();

  const overdueCount = metrics.overdueTasks.count;
  const blockedCount = metrics.blockedItems.count;
  const milestoneCount = metrics.upcomingMilestones.count;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h2 className="text-sm font-semibold text-slate-900">Project health</h2>
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#FEF3C7] text-[#D97706] tracking-tight">
            {initialProjectHealth.status}
          </span>
        </div>

        {/* Big Percentage & Label */}
        <div className="mt-1">
          <div className="text-3xl font-bold text-slate-900 tracking-tight">
            {initialProjectHealth.progressPercentage}%
          </div>
          <div className="text-xs text-slate-500 mt-0.5">Delivery progress</div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <ProgressBar progress={initialProjectHealth.progressPercentage} height="h-2" />
        </div>
      </div>

      {/* Breakdown and Trend Stats */}
      <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-1">
        <div className="text-xs text-slate-500">
          {overdueCount} overdue · {blockedCount} blocked · {milestoneCount} upcoming
        </div>
        <div className="text-xs font-medium text-[#059669]">
          {initialProjectHealth.trendText}
        </div>
      </div>
    </div>
  );
};
