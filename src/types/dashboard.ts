export type TaskStatus = 'Overdue' | 'Blocked' | 'In Progress' | 'Completed';

export interface OverdueTask {
  id: string;
  opId: string; // OpenProject work package ID (e.g., #1042)
  title: string;
  owner: string;
  ownerAvatar?: string;
  age: string;
  status: TaskStatus;
  progress: number;
  originalDueDate: string;
  proposedDueDate?: string;
  dependencies?: string[];
  lockVersion: number;
}

export interface DashboardMetrics {
  overdueTasks: {
    count: number;
    badgeText: string;
  };
  projectProgress: {
    percentage: number;
    badgeText: string;
  };
  blockedItems: {
    count: number;
    badgeText: string;
  };
  upcomingMilestones: {
    count: number;
    badgeText: string;
  };
}

export interface AIDailySummary {
  badgeText: string;
  narrative: string;
  footerNote: string;
  actionText: string;
}

export interface ProjectHealth {
  status: 'GREEN' | 'AMBER' | 'RED';
  progressPercentage: number;
  breakdown: string;
  trendText: string;
}

export interface SyncStatus {
  connected: boolean;
  lastSyncText: string;
}

export interface UserProfile {
  name: string;
  avatarInitial: string;
  role: string;
  badge: string;
}
