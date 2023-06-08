import { create } from "zustand";

import { apiInstance } from "../utils/api";

interface storeState {
  excelStateGenerate: boolean;
  pdfStateGenerate: boolean;
  loading: boolean;
  error: boolean;
  generatePdf: (dataForm: any) => void;
  generateExcel: (dataForm: any) => void;
  reset: () => void;
  resetAll: () => void;
}

export const generatorStore = create<storeState>((set, get) => ({
  excelStateGenerate: false,
  pdfStateGenerate: false,
  loading: false,
  error: false,
  generatePdf: async (dataForm: any) => {
    try {
      set((state) => ({ ...state, pdfStateGenerate: false, loading: true }));
      const { data } = await apiInstance.post(
        `/generators/generatePdf`,
        dataForm
      );
      set((state) => ({ ...state, pdfStateGenerate: true, loading: false }));
    } catch (e) {
      set((state) => ({ ...state, loading: false, error: true }));
    }
  },
  generateExcel: async (dataForm: any) => {
    try {
      set((state) => ({ ...state, excelStateGenerate: false, loading: true }));
      const { data } = await apiInstance.post(
        `/generators/generateExcel`,
        dataForm
      );
      set((state) => ({ ...state, excelStateGenerate: true, loading: false }));
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
