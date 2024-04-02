import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Contatiner, Wrap } from "./layoutStyle";

export default function Layout() {
  return (
    <Wrap>
      <Header />
      <Contatiner>
        <Outlet />
      </Contatiner>
      <Footer />
    </Wrap>
  );
}
