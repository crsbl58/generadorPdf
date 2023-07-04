import { shallow } from "zustand/shallow";
import { modalLoadingStore } from "../modalLoadingStore";

const useModalLoading = () => {
  const { stateModalLoading } = modalLoadingStore(
    (state) => ({
      stateModalLoading: state.stateModalLoading,
    }),
    shallow
  );
  const { changeState } = modalLoadingStore();

  return {
    changeState,
    stateModalLoading,
  };
};

export default useModalLoading;
