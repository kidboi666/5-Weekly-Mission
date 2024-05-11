import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/components-user/data-access-user";
import { Footer } from "@/common/ui-footer";
import { NavigationBar } from "@/common/ui-navigation-bar";
import React from "react";

const cx = classNames.bind(styles);

type LayoutProps = React.PropsWithChildren<{
  isSticky: boolean;
}>;

export const Layout: React.FC<LayoutProps> = ({
  children,
  isSticky = true,
}) => {
  const { userData } = useGetUser();
  const { email, profileImageSource } = userData || {};
  const profile = userData ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
