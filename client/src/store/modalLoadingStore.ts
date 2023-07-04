import { create } from "zustand";

interface modalLoadingState {
  stateModalLoading: boolean;
  changeState: (stateSelection: boolean) => void;
}

export const modalLoadingStore = create<modalLoadingState>((set, get) => ({
  stateModalLoading: false,
  changeState: (stateSelection: boolean) => {
    try {
      set((state) => ({ stateModalLoading: stateSelection }));
    } catch (e) {
      set((state) => ({ ...state, error: true }));
    }
  },
}));
