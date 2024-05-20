import React from "react";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.page_wrapper}>{children}</div>
    </>
  );
}

export default Layout;
