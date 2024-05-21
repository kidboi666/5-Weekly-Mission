import React from "react";
import styled from "styled-components";
import SigninHeader from "@/src/sign/signin-header";
import OtherLink from "@/src/sign/sign-link";
import device from "@/src/sign/config";

const SigninLayout = () => {
  return (
    <ContainerStyled>
      <SigninHeader />
      <ItemsStyled />
      <OtherLink />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  padding: 23.8rem 0px 23.3rem 0px;
  justify-content: center;
  align-items: center;
  background: var(--light-blue);

  @media ${device.mobile} {
    padding: 12rem 3.2rem 23.3rem;
  }
`;

const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
`;

export default SigninLayout;
