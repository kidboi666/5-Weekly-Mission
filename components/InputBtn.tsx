import styles from "./InputBtn.module.css";

const InputBtn = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.inputBtn}>{children}</div>;
};

export default InputBtn;
