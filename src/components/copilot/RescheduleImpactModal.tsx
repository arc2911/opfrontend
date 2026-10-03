'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useDashboardStore } from '@/store/useDashboardStore';
import { AlertTriangle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export const RescheduleImpactModal: React.FC = () => {
  const {
    activeModal,
    activeRescheduleProposal,
    closeModal,
    confirmRescheduleWriteBack,
    rejectProposal,
    isWritingBack,
  } = useDashboardStore();

  const isOpen = activeModal === 'RESCHEDULE' && !!activeRescheduleProposal;
  if (!isOpen || !activeRescheduleProposal) return null;

  const proposal = activeRescheduleProposal;

  const handleConfirm = () => {
    confirmRescheduleWriteBack(proposal.taskId);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title={`AI Reschedule Impact Analysis: ${proposal.taskTitle}`}
      subtitle={`OpenProject Work Package ${proposal.openProjectId} · Lock Version ${proposal.lockVersion}`}
      maxWidth="xl"
      footer={
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={rejectProposal}
            disabled={isWritingBack}
          >
            Reject Proposal
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleConfirm}
            isLoading={isWritingBack}
            className="bg-[#0284C7] hover:bg-[#0369A1]"
          >
            Confirm & Write Back to OpenProject
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        {/* Grounding & AI Rationale */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1">
            <span className="text-[#0284C7] font-bold">✦</span>
            <span>AI Grounding & Context Rationale</span>
            <span className="ml-auto text-[11px] font-normal text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              {proposal.confidenceScore}% confidence
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            {proposal.groundingRationale}
          </p>
        </div>

        {/* Side-by-Side Diff Inspection */}
        <div>
          <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">
            Proposed Schedule Diff
          </h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="py-2 px-3 font-medium">Attribute</th>
                  <th className="py-2 px-3 font-medium">Current OpenProject State</th>
                  <th className="py-2 px-3 font-medium text-[#0284C7]">AI Proposed State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {proposal.diffs.map((diff, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2 px-3 font-medium text-slate-800">{diff.label}</td>
                    <td className="py-2 px-3 text-rose-600 line-through">
                      {diff.currentValue}
                    </td>
                    <td className="py-2 px-3 text-emerald-700 font-medium">
                      {diff.proposedValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Downstream Impact Ripple Effects */}
        {proposal.downstreamImpacts.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              Downstream Critical Path Impacts
            </h4>
            <div className="space-y-1.5">
              {proposal.downstreamImpacts.map((impact, idx) => (
                <div
                  key={idx}
                  className="bg-amber-50/60 border border-amber-200/80 rounded-md p-2.5 text-xs text-amber-900 flex items-start gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold">{impact.affectedTask}:</span>{' '}
                    <span>{impact.impactDescription}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mitigation Strategy */}
        <div className="bg-blue-50/60 border border-blue-100 rounded-md p-2.5 text-xs text-blue-900">
          <span className="font-semibold">Recommended Mitigation:</span>{' '}
          {proposal.mitigationStrategy}
        </div>

        {/* Guardrail Disclaimer */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            OpenProject will only be updated upon your explicit confirmation. Lock version{' '}
            {proposal.lockVersion} prevents race conditions.
          </span>
        </div>
      </div>
    </Modal>
  );
};
