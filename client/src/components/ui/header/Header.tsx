import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [stateCurrent, setStateCurrent] = useState("Generador Pdf y Excel");

  return (
    <header className={styles.header}>
      <h3>{stateCurrent}</h3>
    </header>
  );
};

export default Header;
