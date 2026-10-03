'use client';

import React from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useDashboardStore } from '@/store/useDashboardStore';
import { initialDailySummary } from '@/data/mockData';

export const AIDailySummaryCard: React.FC = () => {
  const { openWorkPackagesDrawer } = useDashboardStore();

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h2 className="text-sm font-semibold text-slate-900">
            AI daily status summary
          </h2>
          <StatusBadge
            variant="grounded"
            text={initialDailySummary.badgeText}
            className="text-[11px] font-normal"
          />
        </div>

        {/* Narrative Body */}
        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          {initialDailySummary.narrative}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 mt-2 border-t border-slate-100">
        <span className="text-[11px] text-slate-400 font-normal">
          {initialDailySummary.footerNote}
        </span>
        <button
          type="button"
          onClick={openWorkPackagesDrawer}
          className="text-xs font-medium text-[#0284C7] hover:text-[#0369A1] hover:underline transition-colors text-left sm:text-right cursor-pointer"
        >
          {initialDailySummary.actionText}
        </button>
      </div>
    </div>
  );
};
