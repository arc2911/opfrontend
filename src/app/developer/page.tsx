'use client';

import React, { useState } from 'react';
import { DeveloperSidebar } from '@/components/developer/DeveloperSidebar';
import { DeveloperHeader } from '@/components/developer/DeveloperHeader';
import { DeveloperKPICards } from '@/components/developer/DeveloperKPICards';
import { DeveloperWorkPackagesTable } from '@/components/developer/DeveloperWorkPackagesTable';
import { DeveloperDeadlinesCard } from '@/components/developer/DeveloperDeadlinesCard';
import { DeveloperAIInsightsCard } from '@/components/developer/DeveloperAIInsightsCard';
import { DeveloperActivityCard } from '@/components/developer/DeveloperActivityCard';
import { ReadOnlyBanner } from '@/components/developer/ReadOnlyBanner';
import { DeveloperStateExamples } from '@/components/developer/DeveloperStateExamples';

export default function DeveloperDashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* 240px Midnight Navy Developer Sidebar (Desktop + Mobile Drawer) */}
      <DeveloperSidebar
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Developer Canvas Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 flex flex-col gap-6">
          {/* Header & Controls with Mobile Menu Trigger */}
          <DeveloperHeader onOpenMobileMenu={() => setMobileMenuOpen(true)} />

          {/* 4 KPI Metric Cards */}
          <DeveloperKPICards />

          {/* My Work Packages Table */}
          <DeveloperWorkPackagesTable />

          {/* Middle 3-Card Row: Upcoming Deadlines, AI Task Insights, Recent Activity */}
          <section
            aria-label="Intelligence & Deadlines"
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <DeveloperDeadlinesCard />
            <DeveloperAIInsightsCard />
            <DeveloperActivityCard />
          </section>

          {/* Read-only Notice Banner */}
          <ReadOnlyBanner />

          {/* State Examples Section */}
          <DeveloperStateExamples />
        </div>
      </main>
    </div>
  );
}
