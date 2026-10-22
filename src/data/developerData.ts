import {
  DeveloperWorkPackage,
  DeveloperKPIData,
  UpcomingDeadlineItem,
  RecentActivityItem,
  AssignedProjectItem,
} from '@/types/developer';

export const developerProjects: AssignedProjectItem[] = [
  { id: 3, name: 'Project Assistant' },
  { id: 2, name: 'Scrum project' },
  { id: 1, name: 'Demo project' },
];

export const sampleKPIData: DeveloperKPIData = {
  assignedToMe: {
    count: 5,
    subtitle: 'Sample assignment · 3 projects',
  },
  dueSoon: {
    count: 2,
    subtitle: 'Today + tomorrow · not overdue',
  },
  overdue: {
    count: 1,
    subtitle: '1 day overdue · needs review',
  },
  completed: {
    count: 1,
    subtitle: 'Of 5 sample work packages',
  },
};

export const sampleWorkPackages: DeveloperWorkPackage[] = [
  {
    id: '#301',
    title: 'Fix membership scope filter',
    project: 'Project Assistant',
    status: 'In progress',
    priority: 'High',
    dueDate: '14 Oct 2026',
    isOverdue: true,
  },
  {
    id: '#204',
    title: 'Add sprint validation tests',
    project: 'Scrum project',
    status: 'In progress',
    priority: 'High',
    dueDate: '15 Oct 2026',
    isToday: true,
  },
  {
    id: '#112',
    title: 'Resolve upload retry error',
    project: 'Demo project',
    status: 'Open',
    priority: 'Normal',
    dueDate: '16 Oct 2026',
  },
  {
    id: '#205',
    title: 'Document release checklist',
    project: 'Scrum project',
    status: 'Open',
    priority: 'Normal',
    dueDate: '20 Oct 2026',
  },
  {
    id: '#302',
    title: 'Add audit event labels',
    project: 'Project Assistant',
    status: 'Completed',
    priority: 'Low',
    dueDate: '13 Oct 2026',
  },
];

export const sampleUpcomingDeadlines: UpcomingDeadlineItem[] = [
  {
    id: '#204',
    title: 'Add sprint validation tests',
    project: 'Scrum project',
    dateText: '15 Oct 2026 · Today',
    status: 'In progress',
  },
  {
    id: '#112',
    title: 'Resolve upload retry error',
    project: 'Demo project',
    dateText: '16 Oct 2026 · Tomorrow',
    status: 'Open',
  },
  {
    id: '#205',
    title: 'Document release checklist',
    project: 'Scrum project',
    dateText: '20 Oct 2026',
    status: 'Open',
  },
];

export const sampleAIInsights = [
  '#301 Fix membership scope filter is 1 day overdue; review before #204, due today.',
  '#112 Resolve upload retry error is still Open and due tomorrow; confirm readiness.',
];

export const sampleRecentActivity: RecentActivityItem[] = [
  {
    id: 'act-1',
    taskId: '#301',
    actionText: 'Status changed to In progress',
    timestamp: '15 Oct, 09:20',
  },
  {
    id: 'act-2',
    taskId: '#302',
    actionText: 'Marked Completed',
    timestamp: '14 Oct, 16:40',
  },
  {
    id: 'act-3',
    taskId: '#204',
    actionText: 'Tests checklist added',
    timestamp: '14 Oct, 14:10',
  },
];
