import React from "react";
import styles from "./screen.module.scss";

const Screen = ({
  children,
  background,
}: {
  children: any;
  background: string;
}) => {
  return (
    <div
      style={{
        background,
      }}
      className={styles.screen}
    >
      {children}
    </div>
  );
};

export default Screen;
