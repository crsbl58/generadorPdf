import React from "react";
import Screen from "../screen";
import Header from "@/components/ui/header";
import styles from "./template.module.scss";

const Template = ({ children }: { children: any }) => {
  return (
    <Screen>
      <div className={styles.template00}>
        <Header />
        <div className={styles.template02}>
          {children}
        </div>
      </div>
    </Screen>
  );
};

export default Template;
