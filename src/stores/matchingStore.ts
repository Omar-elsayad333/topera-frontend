import { create } from 'zustand'

interface Actions {
  setMatchingNavData: (data: any) => void
}

interface State {
  matchingNavData: any
}

export const useMatching = create<State & Actions>((set) => ({
  matchingNavData: [],
  setMatchingNavData: (data) => set({ matchingNavData: data }),
}))
