import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <S.GlobalStyle />
      <div className={styles.page_wrapper}>{children}</div>
    </>
  );
}

export default Layout;
