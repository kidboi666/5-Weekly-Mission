import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <div className={styles.page_wrapper}>{children}</div>
    </>
  );
}

export default Layout;
