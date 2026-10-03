'use client';

import React from 'react';
import { OverdueRow } from './OverdueRow';
import { useDashboardStore } from '@/store/useDashboardStore';
import { CheckCircle2 } from 'lucide-react';

export const OverdueTable: React.FC = () => {
  const { tasks, metrics, openRescheduleReview } = useDashboardStore();

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs">
      {/* Table Card Header */}
      <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Overdue exceptions
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Review incomplete work whose planned date has passed. No automatic changes are made.
          </p>
        </div>

        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FEE2E2] text-[#DC2626] shrink-0">
          {metrics.overdueTasks.count} overdue
        </span>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                TASK
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                OWNER
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                AGE
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                STATUS
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                PROGRESS
              </th>
              <th className="py-2.5 px-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                REVIEW
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <OverdueRow
                  key={task.id}
                  task={task}
                  onReview={openRescheduleReview}
                />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-10 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    <span className="text-xs font-medium text-slate-700">
                      All work packages are currently on schedule.
                    </span>
                    <span className="text-[11px] text-slate-400">
                      No overdue exceptions detected across active projects.
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
