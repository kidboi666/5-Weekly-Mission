import { useGetUserInfo } from "../../api/useGetUserInfo";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import * as MainLayout from "./Layout.style";

export const Layout = ({ children, isFixed }) => {
  const { data } = useGetUserInfo();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Header profile={profile} isFixed={isFixed} />
      <MainLayout.MainWrap>{children}</MainLayout.MainWrap>
      <Footer />
    </>
  );
};
