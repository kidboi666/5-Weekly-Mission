export interface LayoutProps {
  children: React.ReactNode;
  isSticky: boolean;
  userId?: number;
}

export interface ProfileData {
  email: string;
  profileImageSource: string;
}
