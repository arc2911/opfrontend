'use client';

import React from 'react';
import { OverdueTask } from '@/types/dashboard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface OverdueRowProps {
  task: OverdueTask;
  onReview: (taskId: string) => void;
}

export const OverdueRow: React.FC<OverdueRowProps> = ({ task, onReview }) => {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50/70 transition-colors duration-150">
      {/* TASK */}
      <td className="py-3 px-4 text-xs font-medium text-slate-900">
        <div className="flex items-center gap-2">
          <span>{task.title}</span>
          <span className="text-[10px] text-slate-400 font-normal">{task.opId}</span>
        </div>
      </td>

      {/* OWNER */}
      <td className="py-3 px-4 text-xs text-slate-600 font-normal">
        {task.owner}
      </td>

      {/* AGE */}
      <td className="py-3 px-4 text-xs font-medium text-rose-600">
        {task.age}
      </td>

      {/* STATUS */}
      <td className="py-3 px-4 text-xs">
        <StatusBadge
          variant={task.status === 'Overdue' ? 'overdue' : 'blocked'}
          text={task.status}
        />
      </td>

      {/* PROGRESS */}
      <td className="py-3 px-4 text-xs">
        <div className="flex items-center gap-3 w-28">
          <span className="text-slate-600 font-medium text-[11px] w-7 shrink-0">
            {task.progress}%
          </span>
          <div className="flex-1">
            <ProgressBar progress={task.progress} height="h-1.5" />
          </div>
        </div>
      </td>

      {/* REVIEW ACTION */}
      <td className="py-3 px-4 text-xs text-right sm:text-left">
        <button
          type="button"
          onClick={() => onReview(task.id)}
          className="text-[#0284C7] hover:text-[#0369A1] font-medium hover:underline transition-colors cursor-pointer"
        >
          Review
        </button>
      </td>
    </tr>
  );
};
