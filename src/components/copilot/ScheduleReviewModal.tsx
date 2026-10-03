'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useDashboardStore } from '@/store/useDashboardStore';
import { Calendar, Layers, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const ScheduleReviewModal: React.FC = () => {
  const {
    activeModal,
    activeScheduleProposal,
    closeModal,
    confirmScheduleWriteBack,
    rejectProposal,
    isWritingBack,
  } = useDashboardStore();

  const isOpen = activeModal === 'SCHEDULE' && !!activeScheduleProposal;
  if (!isOpen || !activeScheduleProposal) return null;

  const proposal = activeScheduleProposal;

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="AI Schedule Generation: Review Proposed Plan"
      subtitle={`${proposal.projectName} · Generated ${proposal.generatedAt}`}
      maxWidth="xl"
      footer={
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={rejectProposal}
            disabled={isWritingBack}
          >
            Reject Plan
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={confirmScheduleWriteBack}
            isLoading={isWritingBack}
            className="bg-[#0284C7] hover:bg-[#0369A1]"
          >
            Approve & Push to OpenProject
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Scope Overview Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Project Scope
            </div>
            <div className="text-sm font-semibold text-slate-800 mt-0.5">
              {proposal.scopeSummary}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Estimated Delivery
            </div>
            <div className="text-sm font-semibold text-[#0284C7] mt-0.5">
              {proposal.estimatedDeliveryDate}
            </div>
          </div>
        </div>

        {/* Milestone Decomposition */}
        <div>
          <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            Proposed Milestone Breakdown
          </h4>
          <div className="space-y-2">
            {proposal.milestones.map((ms, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0284C7] flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{ms.name}</div>
                    <div className="text-[11px] text-slate-500">
                      {ms.packagesCount} work packages
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ms.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Path Insight */}
        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-lg p-3 text-xs text-emerald-950">
          <div className="font-semibold text-emerald-900 mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Optimized Critical Path
          </div>
          <p className="font-normal text-emerald-800 leading-relaxed">
            {proposal.criticalPathSummary}
          </p>
        </div>

        {/* Guardrail Disclaimer */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            OpenProject will remain unchanged until you click &quot;Approve &amp; Push&quot;. No automated writes are executed.
          </span>
        </div>
      </div>
    </Modal>
  );
};
