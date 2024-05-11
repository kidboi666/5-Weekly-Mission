import { useGetUserInfo } from "@/pages/api/useGetUserInfo";
import syltes from "./Layout.module.css";
import { Header } from "../Header/Header";

interface UserInfo {
  email?: string;
  profileImageSource?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  isSticky: boolean;
  userId?: number;
}

export const Layout = ({ children, isSticky, userId }: LayoutProps) => {
  const { data } = useGetUserInfo(userId);
  const { email, profileImageSource } = data || {};
  const profile: UserInfo | null = data ? { email, profileImageSource } : null;

  return <Header profile={profile} isSticky={isSticky} />;
};
