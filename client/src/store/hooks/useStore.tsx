import { shallow } from "zustand/shallow";
import { storeStore } from "../storeStore";

const useStore = () => {
  const {
    store,
    list:storeList,
    loading: storeLoading,
    error: storeError,
  } = storeStore(
    (state) => ({
      store: state.store,
      list:state.list,
      loading: state.loading,
      error: state.error,
    }),
    shallow
  );
  const {
    getAll: getAll,
    reset: resetStore,
  } = storeStore();

  return {
    store,
    storeList,
    storeLoading,
    storeError,
    getAll,
    resetStore,
  };
};

export default useStore;
