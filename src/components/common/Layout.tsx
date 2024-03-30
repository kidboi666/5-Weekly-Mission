import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const MainWrap = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.grayf};
  padding-top: 4.25rem;
  @media screen and (max-width: ${theme.screenSize.pc}) {
    padding-top: 3.375rem;
  }
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <MainWrap>
        <Outlet />
      </MainWrap>
      <Footer />
    </div>
  );
}
