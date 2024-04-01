import { useGetUser } from "./data-access/useGetUser";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

const Layout = function ({ children }) {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Navigation profile={profile} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
