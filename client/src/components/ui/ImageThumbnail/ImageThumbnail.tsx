import Image from "next/image";
import styles from "./ImageThumbnail.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const ImageThumbnail = ({
  imgUrl,
  key,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
}: any) => {
  return (
    <div
      key={key}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className={styles.divContainerImageThumbnail}>
        <img
          draggable={false}
          src={imgUrl + `?timestamp=${new Date().getTime()}`}
          alt="Imagen"
        />
        <ButtonIcon fontSize={"1.5rem"} onClick={onClick} icon="cancel" />
      </div>
    </div>
  );
};

export default ImageThumbnail;
