'use client';

import React, { useState } from 'react';
import { Sparkles, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useDashboardStore } from '@/store/useDashboardStore';

export const CopilotDock: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const { openScheduleReview } = useDashboardStore();

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsProcessing(true);
    setResponseMessage(null);

    // Simulate grounded retrieval from OpenProject
    setTimeout(() => {
      setIsProcessing(false);
      if (query.toLowerCase().includes('change') || query.toLowerCase().includes('today')) {
        setResponseMessage(
          'In the last 24h, 8 work packages were completed (72% delivery). 2 blocker items were identified on Payment & DB migration. Review recommended.'
        );
      } else if (query.toLowerCase().includes('schedule') || query.toLowerCase().includes('plan')) {
        openScheduleReview();
      } else {
        setResponseMessage(
          `Analysis grounded in 14 active work packages: Status is AMBER with 12 overdue exceptions. Would you like to review recovery plans?`
        );
      }
    }, 700);
  };

  return (
    <div className="mt-6 flex flex-col gap-2">
      {/* Dock Card */}
      <div className="bg-white border border-slate-200/90 border-l-4 border-l-[#06B6D4] rounded-xl p-4 sm:p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left Lockup & Description */}
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 mt-0.5 text-[#06B6D4] shrink-0 flex items-center justify-center font-bold">
            ✦
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              AI Project Copilot
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Ask about authorised project status, blockers, overdue work or what changed today.
            </p>
          </div>
        </div>

        {/* Right Input & Action */}
        <form onSubmit={handleAsk} className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-80">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What changed today?"
              className="w-full bg-[#F1F5F9]/80 border border-slate-200 rounded-md px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:bg-white transition-all"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            isLoading={isProcessing}
            className="bg-[#0284C7] hover:bg-[#0369A1] shadow-xs px-4 py-2 shrink-0 text-xs font-medium"
          >
            Ask Copilot
          </Button>
        </form>
      </div>

      {/* Dynamic Copilot Inline Answer */}
      {responseMessage && (
        <div className="bg-blue-50/70 border border-blue-100 rounded-lg p-3 text-xs text-blue-900 flex items-start justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex items-start gap-2">
            <span className="text-[#0284C7] font-bold">✦</span>
            <span>{responseMessage}</span>
          </div>
          <button
            onClick={() => setResponseMessage(null)}
            className="text-blue-500 hover:text-blue-700 text-[11px] font-medium shrink-0 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Mandatory Grounding Disclaimer */}
      <div className="text-[11px] text-slate-400 px-1 font-normal">
        OpenProject remains the system of record · AI recommendations require explicit confirmation before write-back.
      </div>
    </div>
  );
};
