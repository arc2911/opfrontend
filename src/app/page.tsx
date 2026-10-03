'use client';

import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/cards/MetricCard';
import { AIDailySummaryCard } from '@/components/cards/AIDailySummaryCard';
import { ProjectHealthCard } from '@/components/cards/ProjectHealthCard';
import { OverdueTable } from '@/components/table/OverdueTable';
import { CopilotDock } from '@/components/copilot/CopilotDock';
import { RescheduleImpactModal } from '@/components/copilot/RescheduleImpactModal';
import { ScheduleReviewModal } from '@/components/copilot/ScheduleReviewModal';
import { WorkPackagesDrawer } from '@/components/copilot/WorkPackagesDrawer';
import { useDashboardStore } from '@/store/useDashboardStore';
import { CheckCircle2, X } from 'lucide-react';

export default function DashboardPage() {
  const {
    metrics,
    writeBackSuccessMessage,
    clearToast,
    openScheduleReview,
  } = useDashboardStore();

  useEffect(() => {
    if (writeBackSuccessMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [writeBackSuccessMessage, clearToast]);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* 240px Fixed/Sticky Navigation Sidebar */}
      <Sidebar />

      {/* Main Canvas Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Toast Feedback for Write-Backs */}
        {writeBackSuccessMessage && (
          <div className="fixed top-4 right-4 z-50 max-w-md bg-emerald-900 text-white text-xs px-4 py-3 rounded-lg shadow-lg border border-emerald-700 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{writeBackSuccessMessage}</span>
            </div>
            <button
              onClick={clearToast}
              className="text-emerald-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="w-full max-w-[1440px] mx-auto px-6 py-6 sm:px-8 sm:py-7 flex flex-col gap-6">
          {/* Header */}
          <Header />

          {/* Top 4 KPI Metric Cards */}
          <section
            aria-label="Key Performance Indicators"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <MetricCard
              label="OVERDUE TASKS"
              value={metrics.overdueTasks.count}
              badgeText={metrics.overdueTasks.badgeText}
              badgeVariant="overdue"
            />
            <MetricCard
              label="PROJECT PROGRESS"
              value={`${metrics.projectProgress.percentage}%`}
              badgeText={metrics.projectProgress.badgeText}
              badgeVariant="progress"
            />
            <MetricCard
              label="BLOCKED ITEMS"
              value={metrics.blockedItems.count}
              badgeText={metrics.blockedItems.badgeText}
              badgeVariant="blocked"
            />
            <MetricCard
              label="UPCOMING MILESTONES"
              value={metrics.upcomingMilestones.count}
              badgeText={metrics.upcomingMilestones.badgeText}
              badgeVariant="milestone"
              onClick={openScheduleReview}
            />
          </section>

          {/* Middle Row: AI Daily Status (~65%) and Project Health (~35%) */}
          <section
            aria-label="Project Status & Health"
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6"
          >
            <div className="lg:col-span-8">
              <AIDailySummaryCard />
            </div>
            <div className="lg:col-span-4">
              <ProjectHealthCard />
            </div>
          </section>

          {/* Overdue Exceptions Table */}
          <section aria-label="Overdue Exceptions">
            <OverdueTable />
          </section>

          {/* Bottom Copilot Dock & Grounding Notice */}
          <section aria-label="AI Copilot Interaction">
            <CopilotDock />
          </section>
        </div>
      </main>

      {/* Interactive Modals & Drawers */}
      <RescheduleImpactModal />
      <ScheduleReviewModal />
      <WorkPackagesDrawer />
    </div>
  );
}
