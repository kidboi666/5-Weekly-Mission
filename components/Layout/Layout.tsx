import { useGetUserInfo } from "@/pages/api/useGetUserInfo";
import styles from "./Layout.module.css";
import { Header } from "../Header/Header";
import { LayoutProps, ProfileData } from "@/types";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children, isSticky, userId }: LayoutProps) => {
  const { data } = useGetUserInfo(userId);
  const { email, profileImageSource } = data || {};
  const profile: ProfileData | null = data
    ? { email, profileImageSource }
    : null;

  return (
    <>
      <Header profile={profile} isSticky={isSticky} />
      <div className={styles.wrapMain}>{children}</div>
      <Footer />
    </>
  );
};
