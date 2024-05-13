import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import { useGetUser } from 'user/data-access-user';
import { Footer } from 'sharing/ui-footer';
import { NavigationBar } from 'sharing/ui-navigation-bar';

const cx = classNames.bind(styles);

interface LayoutProps {
  children: JSX.Element;
  isSticky?: boolean;
}
interface LayoutData {
  email: string;
  profileImageSource: string;
}

export const Layout = ({ children, isSticky = true }: LayoutProps) => {
  const { data } = useGetUser();
  const { email, profileImageSource }: LayoutData = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx('main')}>{children}</main>
      <Footer />
    </div>
  );
};
