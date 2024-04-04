import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Nav from "../components/shared/Nav";
import AddLinkSection from "../components/folderpage/AddLinkSection";
import FolderLayout from "../components/folderpage/FolderLayout";
import Footer from "../components/shared/Footer";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
  margin: 0;
}
`;

const NavWrapper = styled.div`
  position: relative;
`;

const FolderLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FolderPage() {
  return (
    <>
      <GlobalStyle />
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <AddLinkSection />
      <FolderLayoutWrapper>
        <FolderLayout />
      </FolderLayoutWrapper>
      <Footer />
    </>
  );
}

export default FolderPage;
