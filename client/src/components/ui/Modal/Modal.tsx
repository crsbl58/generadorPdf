import { useState, useEffect } from "react";

import Icon from "../Icon";

import styles from "./Modal.module.scss";

const Modal = ({ showModal, children }: any) => {
  const [isShowModal, setIsShowModal] = useState(showModal);

  useEffect(() => {
    setIsShowModal(showModal);
  }, [showModal]);

  return (
    <div
      className={styles.modal}
      style={{ display: isShowModal ? "flex" : "none" }}>
      {children}
    </div>
  );
};

const Window = ({ title, children, setClosed }: any) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.left}></div>
        <div className={styles.title}>{title}</div>
        <Icon
          iconName="close"
          className={styles.closeButton}
          onClick={setClosed}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { Modal, Window };