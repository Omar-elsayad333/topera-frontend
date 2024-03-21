import { create } from 'zustand'

interface Actions {
  updateWorkNavData: (data: any) => void
  updateLearnNavData: (data: any) => void
  updateArchiveNavData: (data: any) => void
}

interface State {
  workNavData: any
  learnNavData: any
  archiveNavData: any
}

export const useMatching = create<State & Actions>((set) => ({
  workNavData: [],
  learnNavData: [],
  archiveNavData: [],
  updateWorkNavData: (data) => set({ workNavData: data }),
  updateLearnNavData: (data) => set({ learnNavData: data }),
  updateArchiveNavData: (data) => set({ archiveNavData: data }),
}))
