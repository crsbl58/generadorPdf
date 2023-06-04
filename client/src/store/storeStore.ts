import { create } from "zustand";

import { apiInstance } from "../utils/api";

import { IStore } from "../interfaces/store";

interface storeState {
  store: IStore;
  list: IStore[];
  loading: boolean;
  error: boolean;
  getAll: () => void;
  reset: () => void;
  resetAll: () => void;
}
const initialDataStore = {
  id: 0,
  name: "",
  address: "",
  district: "",
  backgroundColor: "",
  color: "",
  shortname: "",
};

export const storeStore = create<storeState>((set, get) => ({
  store: initialDataStore,
  list: [],
  loading: false,
  error: false,

  getAll: async () => {
    try {
      set((state) => ({ ...state, loading: true }));
      const { data } = await apiInstance.get(`/image/getAllStore`);
      set((state) => ({ ...state, list: data, loading: false }));
    } catch (e) {
      set((state) => ({ ...state, loading: false, error: true }));
    }
  },

  reset: () =>
    set((state) => ({
      ...state,
      store: initialDataStore,
      list: [],
      loading: false,
      error: false,
    })),
    
  resetAll: () => set({}, true),
}));
