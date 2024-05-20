import React from "react";
import styles from "./pagePadding.module.css";

interface PagePaddingProps {
  children: React.ReactNode;
}

const PagePadding = ({ children }: PagePaddingProps) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default PagePadding;
