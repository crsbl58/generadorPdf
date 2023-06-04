import React from "react";
import Screen from "../screen";
import Header from "@/components/ui/header";
import styles from "./template.module.scss";
/* import Login from '@/components/functional/Login' */

const Template = ({ children }: { children: any }) => {
  return (
    <Screen background="linear-gradient(90deg, rgba(59,59,59,1) 16%, rgba(38,151,159,1) 88%)">
      <div className={styles.template00}>
        <Header />
        <div className={styles.template02}>
          {/* user.email !== "" ? children :  <Login /> */}
          {children}
        </div>
      </div>
    </Screen>
  );
};

export default Template;
