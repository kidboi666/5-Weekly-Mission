import styles from "@/src/widgets/signIn/Auth.module.css";
import { ReactNode } from "react";

interface Ichildren {
  children: ReactNode;
}

function AuthContainer({ children }: Ichildren) {
  return <div className={styles.loginBody}>{children}</div>;
}

export default AuthContainer;
