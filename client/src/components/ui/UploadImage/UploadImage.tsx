import { useRef } from "react";
import styles from "./UploadImage.module.scss";

const UploadImage = ({
  icon = null,
  fontSize = "2.1rem",
  text = "Subir",
  onChange,
}: any) => {
  const refInputFileImg = useRef<any>(null);

  return (
    <div className={styles.UploadImage}>
      <button
        onClick={() => {
          refInputFileImg.current.click();
        }}
      >
        {icon !== null ? (
          <span
            style={{ fontSize: fontSize }}
            className="material-symbols-outlined"
          >
            {icon}
          </span>
        ) : (
          text
        )}
      </button>
      <input
        style={{ display: "none" }}
        accept="image/jpeg"
        ref={refInputFileImg}
        type="file"
        name="image"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default UploadImage;
