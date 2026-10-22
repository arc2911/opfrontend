import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ReadOnlyBanner: React.FC = () => {
  return (
    <div className="bg-[#EFF6FF]/70 border border-blue-200/80 rounded-xl p-4 flex items-start gap-3.5">
      <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
      <div>
        <h4 className="text-xs font-semibold text-slate-900 leading-snug">
          Read-only browsing · Memberships supplied by you
        </h4>
        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
          API roles: Member, Project admin; per-project mapping not supplied. Developer role unconfirmed. Verify each project role and action before enabling updates.
        </p>
      </div>
    </div>
  );
};
