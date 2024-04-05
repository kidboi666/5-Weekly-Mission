import { useGetUserInfo } from "../../api/useGetUserInfo";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import "./Layout.css";

export const Layout = ({ children, isFixed }) => {
  const { data } = useGetUserInfo();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Header profile={profile} isFixed={isFixed} />
      <main className="layout-main">{children}</main>
      <Footer />
    </>
  );
};
