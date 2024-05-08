import React from "react";
import * as S from "./Layout.styled";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <S.GlobalStyle />
      <S.PageWrapper>{children}</S.PageWrapper>
    </>
  );
}

export default Layout;
