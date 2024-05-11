import styles from "./CardList.module.css";
import { ReactNode } from "react";

export const CardList = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapCardList}>{children}</div>;
};
