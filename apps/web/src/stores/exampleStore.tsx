import { create } from 'zustand'

interface ExampleStore {
  example: string
  setExample: (example: string) => void
}

export const useExampleStore = create<ExampleStore>((set) => ({
  example: 'example',
  setExample: (example: string) => set({ example }),
}))