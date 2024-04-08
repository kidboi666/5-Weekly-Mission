import { useGetUserInfo } from "../../api/useGetUserInfo";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import * as MainLayout from "./Layout.style";

export const Layout = ({ children, isSticky, userId }) => {
  const { data } = useGetUserInfo(userId);
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Header profile={profile} isSticky={isSticky} />
      <MainLayout.MainWrap>{children}</MainLayout.MainWrap>
      <Footer />
    </>
  );
};
