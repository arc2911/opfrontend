'use client';

import React from 'react';
import { Plus, Sparkles } from 'lucide-react';
import { Dropdown } from '@/components/ui/Dropdown';
import { Button } from '@/components/ui/Button';
import { useDashboardStore } from '@/store/useDashboardStore';

export const Header: React.FC = () => {
  const { selectedProject, setSelectedProject, openScheduleReview } = useDashboardStore();

  const projectOptions = [
    { id: '3 projects', label: '3 projects' },
    { id: 'payment-gateway', label: 'Payment Gateway Revamp' },
    { id: 'auth-service', label: 'Auth & SSO Overhaul' },
    { id: 'mobile-app', label: 'Mobile Client v2.0' },
  ];

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 pt-1">
      {/* Title & Subtitle */}
      <div>
        <div className="text-xs font-normal text-slate-500 mb-1">
          Workspace <span className="text-slate-400 mx-1">/</span> Overview
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
          Project overview
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Current delivery health, exceptions and AI-assisted project intelligence.
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 shrink-0">
        <Dropdown
          options={projectOptions}
          selectedId={selectedProject}
          onSelect={setSelectedProject}
        />
        <Button
          variant="primary"
          icon={Plus}
          onClick={openScheduleReview}
          className="bg-[#0284C7] hover:bg-[#0369A1] shadow-xs text-xs font-medium px-3.5 py-2"
        >
          Ask Copilot
        </Button>
      </div>
    </header>
  );
};
