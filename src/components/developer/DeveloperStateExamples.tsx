import React from 'react';
import { Loader2, Inbox, AlertCircle, Lock } from 'lucide-react';

export const DeveloperStateExamples: React.FC = () => {
  return (
    <section aria-label="Illustrative State Examples" className="flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-xs font-semibold text-slate-800">
          State examples
        </h4>
        <span className="text-[11px] text-slate-400">
          Illustrative UI states only · not the sample view above · Static controls
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* State 1: Loading */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 text-slate-500 animate-spin" />
            <span className="text-xs font-medium text-slate-700">Loading</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            Loading work packages...
          </p>
        </div>

        {/* State 2: Empty */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <Inbox className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-medium text-slate-700">Empty</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            No matching tasks. Clear filters.
          </p>
        </div>

        {/* State 3: Error */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-xs font-medium text-red-600">Error</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1.5">
            Couldn&apos;t load tasks. Retry later.
          </p>
        </div>

        {/* State 4: Disabled action */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-medium text-slate-700">Disabled action</span>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <button
              type="button"
              disabled
              className="px-2 py-0.5 text-xs text-slate-400 bg-slate-100 border border-slate-200 rounded cursor-not-allowed select-none"
            >
              Update
            </button>
            <span className="text-[11px] text-slate-400 truncate">
              Action permission unverified.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
