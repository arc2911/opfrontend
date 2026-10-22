export type DeveloperTaskStatus = 'In progress' | 'Open' | 'Completed';
export type DeveloperTaskPriority = 'High' | 'Normal' | 'Low';

export interface DeveloperWorkPackage {
  id: string; // e.g. '#301'
  title: string;
  project: string;
  status: DeveloperTaskStatus;
  priority: DeveloperTaskPriority;
  dueDate: string;
  isOverdue?: boolean;
  isToday?: boolean;
}

export interface DeveloperKPIData {
  assignedToMe: {
    count: number | null;
    subtitle: string;
  };
  dueSoon: {
    count: number | null;
    subtitle: string;
  };
  overdue: {
    count: number | null;
    subtitle: string;
  };
  completed: {
    count: number | null;
    subtitle: string;
  };
}

export interface UpcomingDeadlineItem {
  id: string;
  title: string;
  project: string;
  dateText: string;
  status: DeveloperTaskStatus;
}

export interface RecentActivityItem {
  id: string;
  taskId: string;
  actionText: string;
  timestamp: string;
}

export interface AssignedProjectItem {
  id: number;
  name: string;
}
