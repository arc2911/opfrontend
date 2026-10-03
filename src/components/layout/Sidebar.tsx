'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Layers,
  AlertCircle,
  BarChart3,
  Sparkles,
  FolderKanban,
  Settings,
  RefreshCw,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDashboardStore } from '@/store/useDashboardStore';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { syncStatus, triggerSync } = useDashboardStore();

  const mainNav = [
    { name: 'Overview', href: '/', icon: LayoutDashboard },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Overdue', href: '#overdue', icon: AlertCircle },
    { name: 'Reports', href: '#reports', icon: BarChart3 },
    { name: 'AI Copilot', href: '#copilot', icon: Sparkles },
  ];

  const workspaceNav = [
    { name: 'All projects', href: '#all-projects', icon: FolderKanban },
    { name: 'Settings', href: '#settings', icon: Settings },
  ];

  return (
    <aside className="w-[240px] shrink-0 min-h-screen bg-[#0B1528] text-slate-300 flex flex-col justify-between select-none">
      {/* Top Branding & Navigation */}
      <div className="flex flex-col">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 px-5 pt-6 pb-6 border-b border-slate-800/60">
          <div className="w-8 h-8 rounded-md bg-[#06B6D4] flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold tracking-tight leading-tight">
              Project Copilot
            </span>
            <span className="text-[11px] text-slate-400 font-normal leading-tight mt-0.5">
              AI-assisted execution
            </span>
          </div>
        </div>

        {/* Primary Nav List */}
        <nav className="px-3 pt-4 space-y-1">
          {mainNav.map((item) => {
            const isActive = pathname === item.href || (item.name === 'Overview' && pathname === '/');
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors duration-150',
                  isActive
                    ? 'bg-[#162544] text-white border-l-2 border-[#06B6D4]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                )}
              >
                <Icon className={cn('w-4 h-4 shrink-0', isActive ? 'text-white' : 'text-slate-400')} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Workspace Nav Section */}
        <div className="px-3 pt-6">
          <div className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            WORKSPACE
          </div>
          <div className="space-y-1">
            {workspaceNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors duration-150"
                >
                  <Icon className="w-4 h-4 shrink-0 text-slate-400" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Sync Status Section */}
        <div className="px-6 pt-7">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
            SYNC STATUS
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ECFDF5] text-[#059669]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              Connected
            </span>
            <button
              onClick={triggerSync}
              title="Re-sync with OpenProject"
              className="text-slate-500 hover:text-slate-300 p-1 rounded-md hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-[11px] text-slate-400 mt-1.5">
            {syncStatus.lastSyncText}
          </div>
        </div>
      </div>

      {/* Bottom Profile Footer */}
      <div className="p-4 border-t border-slate-800/60 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-700/80 text-white flex items-center justify-center text-xs font-semibold shrink-0">
          K
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-white text-xs font-medium truncate">
            Project Manager
          </span>
          <span className="text-[10px] text-slate-400 truncate mt-0.5">
            PM · Authorised
          </span>
        </div>
      </div>
    </aside>
  );
};
