import { create } from "zustand";

import { apiInstance } from "../utils/api";

import { IStore } from "../interfaces/store";

interface storeState {
  listImage: any;
  loading: boolean;
  error: boolean;
  upload: (formData: any) => void;
  updateImage: (dataImage: any) => void;
  loadImage: () => void;
  reset: () => void;
  resetAll: () => void;
}

export const imageStore = create<storeState>((set, get) => ({
  listImage: [],
  loading: false,
  error: false,
  upload: async (formData: any) => {
    try {
      set((state) => ({ ...state, loading: true }));
      const { data } = await apiInstance.post(`/image/upLoad`, formData);
      set((state) => ({ ...state, listImage: data, loading: false }));
    } catch (e) {
      set((state) => ({ ...state, loading: false, error: true }));
    }
  },
  loadImage: async () => {
    try {
      set((state) => ({ ...state, loading: true }));
      const { data } = await apiInstance.get(`/image/loadImage`);
      set((state) => ({ ...state, listImage: data, loading: false }));
    } catch (e) {
      set((state) => ({ ...state, loading: false, error: true }));
    }
  },
  updateImage: async (dataImage: any) => {
   
    try {
      set((state) => ({ ...state, loading: true }));
      const { data } = await apiInstance.post(`/image/updateImage`, dataImage);
      set((state) => ({ ...state, listImage: data, loading: false }));
    } catch (e) {
      set((state) => ({ ...state, loading: false, error: true }));
    }
  },
  reset: () =>
    set((state) => ({
      ...state,
      loading: false,
      error: false,
    })),

  resetAll: () => set({}, true),
}));
