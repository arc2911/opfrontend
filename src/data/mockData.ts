import { DashboardMetrics, OverdueTask, AIDailySummary, ProjectHealth, SyncStatus, UserProfile } from '@/types/dashboard';
import { RescheduleProposal, ScheduleProposal } from '@/types/copilot';

export const initialMetrics: DashboardMetrics = {
  overdueTasks: {
    count: 12,
    badgeText: 'Needs review',
  },
  projectProgress: {
    percentage: 72,
    badgeText: 'Across active work',
  },
  blockedItems: {
    count: 4,
    badgeText: '2 need attention',
  },
  upcomingMilestones: {
    count: 7,
    badgeText: 'Next 14 days',
  },
};

export const initialDailySummary: AIDailySummary = {
  badgeText: 'Grounded in current data',
  narrative: 'Overall project status is AMBER. The team completed eight work packages today and overall progress is 72%. Three tasks remain overdue and two are blocked. Management attention is recommended to review the completion plan.',
  footerNote: 'AI-generated narrative · Verify against underlying work packages',
  actionText: 'View work packages',
};

export const initialProjectHealth: ProjectHealth = {
  status: 'AMBER',
  progressPercentage: 72,
  breakdown: '12 overdue · 4 blocked · 7 upcoming',
  trendText: 'Stable vs previous report',
};

export const initialSyncStatus: SyncStatus = {
  connected: true,
  lastSyncText: 'Last sync 2 min ago',
};

export const initialUserProfile: UserProfile = {
  name: 'Project Manager',
  avatarInitial: 'K',
  role: 'PM · Authorised',
  badge: 'Authorised',
};

export const initialOverdueTasks: OverdueTask[] = [
  {
    id: 'wp-104',
    opId: '#104',
    title: 'Payment API Integration',
    owner: 'A. Kumar',
    age: '4 days',
    status: 'Overdue',
    progress: 58,
    originalDueDate: '2026-09-29',
    proposedDueDate: '2026-10-06',
    dependencies: ['Gateway Sandbox Setup', 'PCI Compliance Audit'],
    lockVersion: 4,
  },
  {
    id: 'wp-109',
    opId: '#109',
    title: 'UAT test data',
    owner: 'S. Priya',
    age: '2 days',
    status: 'Blocked',
    progress: 35,
    originalDueDate: '2026-10-01',
    proposedDueDate: '2026-10-05',
    dependencies: ['DB Migration Seed Data'],
    lockVersion: 2,
  },
  {
    id: 'wp-115',
    opId: '#115',
    title: 'Auth middleware',
    owner: 'M. Ravi',
    age: '1 day',
    status: 'Overdue',
    progress: 74,
    originalDueDate: '2026-10-02',
    proposedDueDate: '2026-10-04',
    dependencies: ['OAuth Server Handshake'],
    lockVersion: 5,
  },
  {
    id: 'wp-121',
    opId: '#121',
    title: 'Dashboard QA',
    owner: 'K. Arun',
    age: '1 day',
    status: 'Overdue',
    progress: 82,
    originalDueDate: '2026-10-02',
    proposedDueDate: '2026-10-04',
    dependencies: ['Figma Design QA Check'],
    lockVersion: 3,
  },
];

export const mockRescheduleProposals: Record<string, RescheduleProposal> = {
  'wp-104': {
    id: 'prop-104',
    taskId: 'wp-104',
    taskTitle: 'Payment API Integration',
    openProjectId: '#104',
    currentDueDate: '2026-09-29',
    proposedDueDate: '2026-10-06 (+7 days)',
    confidenceScore: 94,
    groundingRationale:
      'Payment gateway sandbox environment was delayed by 3 business days by the 3rd-party vendor. A. Kumar has completed 58% of code stubs and requires 4 calendar days of uninterrupted testing once the sandbox connection recovers.',
    downstreamImpacts: [
      {
        affectedTask: 'Checkout Flow E2E Testing (#118)',
        impactDescription: 'Start date shifts from Oct 2 to Oct 7 (within sprint buffer)',
        severity: 'medium',
      },
      {
        affectedTask: 'Merchant Portal Onboarding (#124)',
        impactDescription: 'No critical path disruption. Parallel execution possible.',
        severity: 'low',
      },
    ],
    diffs: [
      {
        field: 'due_date',
        label: 'Due Date',
        currentValue: '29 Sep 2026 (4 days overdue)',
        proposedValue: '06 Oct 2026 (Revised baseline)',
        impactLevel: 'medium',
      },
      {
        field: 'status',
        label: 'Status',
        currentValue: 'Overdue',
        proposedValue: 'In Progress (On Track)',
        impactLevel: 'low',
      },
      {
        field: 'estimated_hours',
        label: 'Remaining Effort',
        currentValue: '16 hours',
        proposedValue: '12 hours (Accelerated)',
        impactLevel: 'low',
      },
    ],
    mitigationStrategy:
      'Activate mock payment stub server for downstream QA until production sandbox credentials arrive.',
    lockVersion: 4,
  },
  'wp-109': {
    id: 'prop-109',
    taskId: 'wp-109',
    taskTitle: 'UAT test data',
    openProjectId: '#109',
    currentDueDate: '2026-10-01',
    proposedDueDate: '2026-10-05 (+4 days)',
    confidenceScore: 89,
    groundingRationale:
      'Blocked by DB migration script. Data generation pipeline has been verified with synthetic datasets. Rescheduling allows migration script to execute in staging on Oct 4.',
    downstreamImpacts: [
      {
        affectedTask: 'Security Penetration Testing (#130)',
        impactDescription: 'Delayed by 1 day, remains before milestone release.',
        severity: 'low',
      },
    ],
    diffs: [
      {
        field: 'due_date',
        label: 'Due Date',
        currentValue: '01 Oct 2026 (2 days overdue)',
        proposedValue: '05 Oct 2026',
        impactLevel: 'medium',
      },
      {
        field: 'status',
        label: 'Status',
        currentValue: 'Blocked',
        proposedValue: 'In Progress',
        impactLevel: 'high',
      },
    ],
    mitigationStrategy: 'Seed staging DB with anonymized customer test sets immediately.',
    lockVersion: 2,
  },
  'wp-115': {
    id: 'prop-115',
    taskId: 'wp-115',
    taskTitle: 'Auth middleware',
    openProjectId: '#115',
    currentDueDate: '2026-10-02',
    proposedDueDate: '2026-10-04 (+2 days)',
    confidenceScore: 97,
    groundingRationale:
      'JWT token validation is 74% complete. Only refresh token rotation and cookie expiration edge cases remain.',
    downstreamImpacts: [],
    diffs: [
      {
        field: 'due_date',
        label: 'Due Date',
        currentValue: '02 Oct 2026 (1 day overdue)',
        proposedValue: '04 Oct 2026',
        impactLevel: 'low',
      },
    ],
    mitigationStrategy: 'No downstream critical dependencies affected.',
    lockVersion: 5,
  },
  'wp-121': {
    id: 'prop-121',
    taskId: 'wp-121',
    taskTitle: 'Dashboard QA',
    openProjectId: '#121',
    currentDueDate: '2026-10-02',
    proposedDueDate: '2026-10-04 (+2 days)',
    confidenceScore: 96,
    groundingRationale:
      'Figma QA checklist is 82% verified. Cross-browser verification in progress.',
    downstreamImpacts: [],
    diffs: [
      {
        field: 'due_date',
        label: 'Due Date',
        currentValue: '02 Oct 2026 (1 day overdue)',
        proposedValue: '04 Oct 2026',
        impactLevel: 'low',
      },
    ],
    mitigationStrategy: 'Deploy staging preview for concurrent verification.',
    lockVersion: 3,
  },
};

export const sampleScheduleProposal: ScheduleProposal = {
  id: 'sched-prop-01',
  projectName: 'AI Copilot Mobile & Web Launch (Q4)',
  generatedAt: 'Today, 2:30 PM',
  scopeSummary: '3 Epics, 14 Work Packages, 3 Sprint Milestones',
  totalWorkPackages: 14,
  estimatedDeliveryDate: '15 Nov 2026',
  criticalPathSummary: 'Payment API Integration → Mobile Checkout → Stage 2 Beta Release',
  milestones: [
    { name: 'Sprint 1: Core API & Auth', date: '10 Oct 2026', packagesCount: 5 },
    { name: 'Sprint 2: Checkout & Dashboard QA', date: '25 Oct 2026', packagesCount: 6 },
    { name: 'Sprint 3: Production Rollout', date: '15 Nov 2026', packagesCount: 3 },
  ],
};
