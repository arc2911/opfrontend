'use client';

import React from 'react';
import { X, CheckCircle, AlertCircle, Clock, ExternalLink } from 'lucide-react';
import { useDashboardStore } from '@/store/useDashboardStore';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const WorkPackagesDrawer: React.FC = () => {
  const { activeModal, closeModal, tasks } = useDashboardStore();

  const isOpen = activeModal === 'WORK_PACKAGES';
  if (!isOpen) return null;

  const completedToday = [
    { id: '#101', title: 'PostgreSQL connection pool tuning', owner: 'R. Davis', time: 'Completed 3h ago' },
    { id: '#102', title: 'Redis cluster cache invalidation hooks', owner: 'M. Chen', time: 'Completed 4h ago' },
    { id: '#103', title: 'Stripe webhook replay attack protection', owner: 'A. Kumar', time: 'Completed 6h ago' },
    { id: '#105', title: 'User session JWT rotation service', owner: 'M. Ravi', time: 'Completed 7h ago' },
    { id: '#106', title: 'Tailwind CSS design token consolidation', owner: 'K. Arun', time: 'Completed 8h ago' },
    { id: '#107', title: 'OpenProject v3 API rate limiter middleware', owner: 'S. Priya', time: 'Completed 10h ago' },
    { id: '#108', title: 'Error boundary telemetry logger', owner: 'R. Davis', time: 'Completed 11h ago' },
    { id: '#110', title: 'CI/CD pipeline test matrix optimization', owner: 'M. Chen', time: 'Completed 12h ago' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Active Work Packages
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Grounded in current OpenProject repository sync
            </p>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {/* Section 1: Completed in last 24h */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Completed Today (8)
              </span>
              <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">
                72% sprint progress
              </span>
            </div>
            <div className="space-y-2">
              {completedToday.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-lg p-3 text-xs"
                >
                  <div className="flex items-center justify-between text-slate-900 font-medium">
                    <span>{pkg.title}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{pkg.id}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500 mt-1 text-[11px]">
                    <span>{pkg.owner}</span>
                    <span className="text-emerald-600">{pkg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Overdue / Blocked Exceptions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                Exceptions Requiring Attention ({tasks.length})
              </span>
            </div>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-rose-50/40 border border-rose-100 rounded-lg p-3 text-xs"
                >
                  <div className="flex items-center justify-between text-slate-900 font-medium">
                    <span>{task.title}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{task.opId}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500 mt-1.5">
                    <span>{task.owner}</span>
                    <StatusBadge
                      variant={task.status === 'Overdue' ? 'overdue' : 'blocked'}
                      text={task.status}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500">
          <span>Single Source of Truth: OpenProject</span>
          <button
            onClick={closeModal}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-slate-700 font-medium hover:bg-slate-50 cursor-pointer"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};
