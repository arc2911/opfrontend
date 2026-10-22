'use client';

import React, { useState } from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import { Dropdown } from '@/components/ui/Dropdown';

interface DeveloperHeaderProps {
  onOpenMobileMenu?: () => void;
}

export const DeveloperHeader: React.FC<DeveloperHeaderProps> = ({
  onOpenMobileMenu,
}) => {
  const [selectedProject, setSelectedProject] = useState('all');

  const projectOptions = [
    { id: 'all', label: 'All my projects' },
    { id: '3', label: 'Project Assistant (ID 3)' },
    { id: '2', label: 'Scrum project (ID 2)' },
    { id: '1', label: 'Demo project (ID 1)' },
  ];

  return (
    <header className="flex flex-col gap-4 pb-2 pt-1">
      {/* Top Bar with Title & Right Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Breadcrumb, Title & Subtitle + Mobile Toggle */}
        <div className="flex items-start gap-3">
          {onOpenMobileMenu && (
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden mt-1 p-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div>
            <div className="text-xs font-normal text-slate-500 mb-1">
              Home <span className="text-slate-400 mx-1">/</span> Developer Dashboard
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
              Developer Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Track assigned work, deadlines, and project updates
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <Dropdown
            options={projectOptions}
            selectedId={selectedProject}
            onSelect={setSelectedProject}
          />

          {/* Notification Button */}
          <button
            type="button"
            className="w-8 h-8 rounded-md bg-white border border-slate-200/90 flex items-center justify-center text-slate-600 hover:bg-slate-50 shadow-xs transition-colors cursor-default"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-slate-500" />
          </button>

          {/* Profile Button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/90 rounded-md text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors cursor-default"
          >
            <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px] font-semibold">
              K
            </span>
            <span>My profile</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Right-aligned Sample Timestamp Annotation */}
      <div className="flex justify-end">
        <span className="text-xs font-medium text-[#2563EB]">
          Sample data · 15 Oct 2026
        </span>
      </div>
    </header>
  );
};
