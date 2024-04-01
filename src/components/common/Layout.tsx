import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const Contatiner = styled.main`
  padding-top: 5.8125rem;
  background-color: ${theme.color.grayf};
  @media screen and (max-width: ${theme.screenSize.pc}) {
    padding-top: 3.9375rem;
  }
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <Contatiner>
        <Outlet />
      </Contatiner>
      <Footer />
    </div>
  );
}
