import { create } from 'zustand'

type State = { count: number; inc: () => void; dec: () => void; reset: () => void }

export const useCounter = create<State>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  dec: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
}))
