import { useGetUserInfo } from "../../api/useGetUserInfo";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, isFixed }) => {
  const { data } = useGetUserInfo();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Header profile={profile} isFixed={isFixed} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
