import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

const Layout = function ({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
