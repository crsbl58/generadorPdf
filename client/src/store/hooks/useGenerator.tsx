import { shallow } from "zustand/shallow";
import { generatorStore } from "../generatorStore";

const useGenerator = () => {
  const { loading, error, pdfStateGenerate, excelStateGenerate } =
    generatorStore(
      (state) => ({
        excelStateGenerate: state.excelStateGenerate,
        pdfStateGenerate: state.pdfStateGenerate,
        loading: state.loading,
        error: state.error,
      }),
      shallow
    );
  const { generatePdf, generateExcel, reset } = generatorStore();

  return {
    generatePdf,
    generateExcel,
    excelStateGenerate,
    pdfStateGenerate,
    loading,
    error,
    reset,
  };
};

export default useGenerator;
