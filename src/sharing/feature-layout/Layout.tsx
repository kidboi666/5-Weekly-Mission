import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/src/user/data-access-user";
import { Footer, NavigationBar } from "@/src/ui-component";
import { ReactNode, RefObject } from "react";

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

export const Layout = ({ children, isSticky = true, footerRef }: LayoutProps) => {
  const { data } = useGetUser();
  const profile = data ? { email: data.email, imageSource: data.profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};
