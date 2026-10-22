'use client';

import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Layers,
  Calendar,
  Bell,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { developerProjects } from '@/data/developerData';

interface DeveloperSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const DeveloperSidebar: React.FC<DeveloperSidebarProps> = ({
  mobileOpen = false,
  onCloseMobile,
}) => {
  const mainNav = [
    { name: 'Dashboard', href: '/developer', icon: LayoutDashboard },
    { name: 'My Work Packages', href: '#work-packages', icon: SlidersHorizontal },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Calendar', href: '#calendar', icon: Calendar },
    { name: 'Notifications', href: '#notifications', icon: Bell },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full min-h-screen select-none">
      {/* Top Branding & Navigation */}
      <div className="flex flex-col">
        {/* Brand Lockup */}
        <div className="flex items-center justify-between px-5 pt-6 pb-6 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
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

          {/* Close button for mobile */}
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Primary Nav List */}
        <nav className="px-3 pt-4 space-y-1">
          {mainNav.map((item) => {
            const isActive = item.name === 'Dashboard';
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onCloseMobile}
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

        {/* MY PROJECTS Section */}
        <div className="px-3 pt-6">
          <div className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            MY PROJECTS
          </div>
          <div className="space-y-1">
            {developerProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between px-3 py-1.5 rounded-md text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-default"
              >
                <span className="truncate">{project.name}</span>
                <span className="text-[11px] text-slate-500 shrink-0 font-mono ml-2">
                  ID {project.id}
                </span>
              </div>
            ))}
          </div>
          <div className="px-3 text-[11px] text-slate-500 mt-2">
            Memberships supplied by you
          </div>
        </div>

        {/* BROWSING MODE Section */}
        <div className="px-5 pt-6">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            BROWSING MODE
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#162544] text-[#38BDF8] border border-cyan-900/40">
            Read-only preview
          </div>
          <div className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            Task content is illustrative, not live OpenProject data.
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
            My account
          </span>
          <span className="text-[10px] text-slate-400 truncate mt-0.5">
            Role verification required
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-[240px] shrink-0 min-h-screen bg-[#0B1528] text-slate-300 flex-col justify-between select-none">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          {/* Drawer Panel */}
          <aside className="relative w-[260px] max-w-[85vw] bg-[#0B1528] text-slate-300 h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
