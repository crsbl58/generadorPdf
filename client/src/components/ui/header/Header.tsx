import React, { useState } from "react";
import styles from "./Header.module.scss";

import Image from "next/image";

import documentSvg from '../../../../public/svg/document.svg'

const Header = () => {
  const [stateCurrent, setStateCurrent] = useState("Generador Pdf y Excel");

  return (
    <header className={styles.header}>
      <h3>{stateCurrent}</h3>
      <Image src={documentSvg} width={50} height={50} alt={"document"}></Image>
    </header>
  );
};

export default Header;
