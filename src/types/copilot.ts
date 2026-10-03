export type ProposalType = 'RESCHEDULE' | 'SCHEDULE' | 'RESOURCE_REALLOCATION';

export interface DiffItem {
  field: string;
  label: string;
  currentValue: string;
  proposedValue: string;
  impactLevel: 'low' | 'medium' | 'high';
}

export interface RescheduleProposal {
  id: string;
  taskId: string;
  taskTitle: string;
  openProjectId: string;
  currentDueDate: string;
  proposedDueDate: string;
  confidenceScore: number;
  groundingRationale: string;
  downstreamImpacts: {
    affectedTask: string;
    impactDescription: string;
    severity: 'low' | 'medium' | 'high';
  }[];
  diffs: DiffItem[];
  mitigationStrategy: string;
  lockVersion: number;
}

export interface ScheduleProposal {
  id: string;
  projectName: string;
  generatedAt: string;
  scopeSummary: string;
  totalWorkPackages: number;
  estimatedDeliveryDate: string;
  milestones: {
    name: string;
    date: string;
    packagesCount: number;
  }[];
  criticalPathSummary: string;
}

export interface CopilotQueryResponse {
  query: string;
  timestamp: string;
  groundedSummary: string;
  keyInsights: string[];
  suggestedAction?: {
    label: string;
    actionType: 'OPEN_RESCHEDULE' | 'OPEN_SCHEDULE' | 'VIEW_WORK_PACKAGES';
    payload?: unknown;
  };
}
