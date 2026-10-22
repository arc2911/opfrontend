import React from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';
import { sampleAIInsights } from '@/data/developerData';

interface DeveloperAIInsightsCardProps {
  insights?: string[];
}

export const DeveloperAIInsightsCard: React.FC<DeveloperAIInsightsCardProps> = ({
  insights = sampleAIInsights,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#06B6D4]" />
            <h3 className="text-sm font-semibold text-slate-900">
              AI Task Insights
            </h3>
          </div>
          <span className="text-[10px] uppercase font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
            SAMPLE
          </span>
        </div>

        {/* Sub-notice */}
        <p className="text-xs text-[#0284C7] font-medium mb-2.5">
          AI-generated suggestions — review before acting.
        </p>

        {/* Not connected to backend banner */}
        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200/80 mb-3">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>AI Copilot: not connected yet</span>
        </div>

        {/* Bullet List */}
        <div className="space-y-2.5 mt-1">
          {insights.map((insight, idx) => (
            <div key={idx} className="text-xs text-slate-700 leading-relaxed font-normal">
              {insight}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Guardrail */}
      <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400 font-normal">
        AI never modifies OpenProject data automatically.
      </div>
    </div>
  );
};
