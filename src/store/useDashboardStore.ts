import { create } from 'zustand';
import { OverdueTask, DashboardMetrics, SyncStatus } from '@/types/dashboard';
import { RescheduleProposal, ScheduleProposal } from '@/types/copilot';
import {
  initialMetrics,
  initialOverdueTasks,
  initialSyncStatus,
  mockRescheduleProposals,
  sampleScheduleProposal,
} from '@/data/mockData';

interface DashboardState {
  selectedProject: string;
  tasks: OverdueTask[];
  metrics: DashboardMetrics;
  syncStatus: SyncStatus;
  
  // Modals & Panels
  activeModal: 'RESCHEDULE' | 'SCHEDULE' | 'WORK_PACKAGES' | null;
  activeRescheduleProposal: RescheduleProposal | null;
  activeScheduleProposal: ScheduleProposal | null;
  isWritingBack: boolean;
  writeBackSuccessMessage: string | null;

  // Actions
  setSelectedProject: (projectName: string) => void;
  openRescheduleReview: (taskId: string) => void;
  openScheduleReview: () => void;
  openWorkPackagesDrawer: () => void;
  closeModal: () => void;
  confirmRescheduleWriteBack: (taskId: string) => Promise<boolean>;
  rejectProposal: () => void;
  confirmScheduleWriteBack: () => Promise<boolean>;
  triggerSync: () => void;
  clearToast: () => void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  selectedProject: '3 projects',
  tasks: initialOverdueTasks,
  metrics: initialMetrics,
  syncStatus: initialSyncStatus,

  activeModal: null,
  activeRescheduleProposal: null,
  activeScheduleProposal: null,
  isWritingBack: false,
  writeBackSuccessMessage: null,

  setSelectedProject: (projectName) => set({ selectedProject: projectName }),

  openRescheduleReview: (taskId) => {
    const proposal = mockRescheduleProposals[taskId];
    if (proposal) {
      set({
        activeModal: 'RESCHEDULE',
        activeRescheduleProposal: proposal,
      });
    }
  },

  openScheduleReview: () => {
    set({
      activeModal: 'SCHEDULE',
      activeScheduleProposal: sampleScheduleProposal,
    });
  },

  openWorkPackagesDrawer: () => {
    set({ activeModal: 'WORK_PACKAGES' });
  },

  closeModal: () => {
    set({
      activeModal: null,
      activeRescheduleProposal: null,
      activeScheduleProposal: null,
      isWritingBack: false,
    });
  },

  confirmRescheduleWriteBack: async (taskId) => {
    set({ isWritingBack: true });

    // Simulate verified write-back to OpenProject REST API v3
    await new Promise((resolve) => setTimeout(resolve, 800));

    const state = get();
    const updatedTasks = state.tasks.filter((t) => t.id !== taskId);
    const updatedMetrics = {
      ...state.metrics,
      overdueTasks: {
        ...state.metrics.overdueTasks,
        count: Math.max(0, state.metrics.overdueTasks.count - 1),
      },
    };

    set({
      tasks: updatedTasks,
      metrics: updatedMetrics,
      isWritingBack: false,
      activeModal: null,
      activeRescheduleProposal: null,
      writeBackSuccessMessage: `Successfully updated OpenProject work package! Schedule baseline re-aligned.`,
      syncStatus: {
        connected: true,
        lastSyncText: 'Last sync just now',
      },
    });

    return true;
  },

  rejectProposal: () => {
    set({
      activeModal: null,
      activeRescheduleProposal: null,
      activeScheduleProposal: null,
      writeBackSuccessMessage: 'Proposal rejected. OpenProject remains unmodified.',
    });
  },

  confirmScheduleWriteBack: async () => {
    set({ isWritingBack: true });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      isWritingBack: false,
      activeModal: null,
      activeScheduleProposal: null,
      writeBackSuccessMessage: 'AI Proposed Schedule committed to OpenProject! 14 work packages created.',
      syncStatus: {
        connected: true,
        lastSyncText: 'Last sync just now',
      },
    });
    return true;
  },

  triggerSync: () => {
    set({
      syncStatus: {
        connected: true,
        lastSyncText: 'Last sync just now',
      },
      writeBackSuccessMessage: 'Sync complete with OpenProject v3 API.',
    });
  },

  clearToast: () => set({ writeBackSuccessMessage: null }),
}));
