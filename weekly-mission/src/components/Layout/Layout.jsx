import * as S from "./Layout.styled";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <S.GlobalStyle />
      <S.PageWrapper>{children}</S.PageWrapper>
    </>
  );
}

export default Layout;
