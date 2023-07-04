import React from "react";
import styles from "./screen.module.scss";
/* import { useModalLoading } from "../../../store/hooks/index"; */

const Screen = ({ children }: { children: any }) => {
/*   const { stateModalLoading } = useModalLoading(); */

  return (
    <div style={{}} className={styles.screen}>
      {children}
    </div>
  );
};

export default Screen;
