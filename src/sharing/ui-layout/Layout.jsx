import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";

const cx = classNames.bind(styles);

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main className={cx("container")}>{children}</main>
      <Footer />
    </>
  );
};
