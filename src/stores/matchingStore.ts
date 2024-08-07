import { create } from 'zustand'

interface Actions {
  updateTypeNav: () => void

  updateMobileNav: () => void

  updateWorkNavData: (data: any) => void
  updateLearnNavData: (data: any) => void

  updateWorkArchiveData: (data: any) => void
  updateLearnArchiveData: (data: any) => void

  updateWorkArchiveState: () => void
  updateLearnArchiveState: () => void

  updateUserMessage: (data: string) => void
}

interface State {
  type: number

  mobileNav: boolean

  workArchiveState: boolean
  learnArchiveState: boolean

  workNavData: any
  learnNavData: any

  workArchiveData: any
  learnArchiveData: any

  userMessage: string
}

export const useMatching = create<State & Actions>((set) => ({
  // matching nav states
  type: 1,

  mobileNav: false,

  workArchiveState: false,
  learnArchiveState: false,

  workNavData: [],
  learnNavData: [],

  workArchiveData: [],
  learnArchiveData: [],

  // matching nav methods
  updateTypeNav: () => set((state) => ({ type: state.type ? 0 : 1 })),

  updateMobileNav: () => set((state) => ({ mobileNav: !state.mobileNav })),

  updateWorkNavData: (data) => set({ workNavData: data }),
  updateLearnNavData: (data) => set({ learnNavData: data }),

  updateWorkArchiveData: (data) => set({ workArchiveData: data }),
  updateLearnArchiveData: (data) => set({ learnArchiveData: data }),

  updateWorkArchiveState: () => set((state) => ({ workArchiveState: !state.workArchiveState })),
  updateLearnArchiveState: () => set((state) => ({ learnArchiveState: !state.learnArchiveState })),

  // matching content states
  userMessage: '',

  // matching content methods
  updateUserMessage: (data) => set({ userMessage: data }),
}))
