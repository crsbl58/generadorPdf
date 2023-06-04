import { shallow } from "zustand/shallow";
import { imageStore } from "../imageStore";

const useImage = () => {
  const {
    listImage,
    loading: imageLoading,
    error: storeError,
  } = imageStore(
    (state) => ({
      listImage: state.listImage,
      loading: state.loading,
      error: state.error,
    }),
    shallow
  );
  const { loadImage, upload, updateImage, reset: resetStore } = imageStore();

  return {
    listImage,
    imageLoading,
    storeError,
    updateImage,
    loadImage,
    upload,
    resetStore,
  };
};

export default useImage;
