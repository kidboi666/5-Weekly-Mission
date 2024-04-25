import styled from "styled-components";
import Button from "../Button/Button";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: #f0f6ff;
  z-index: 2;
`;

export const Gnb = styled.div`
  max-width: 1920px;
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  margin: 0;

  @media (max-width: 1199px) {
    max-width: 800px;
    padding: 0 32px;
  }

  @media (max-width: 769px) {
    min-width: 400px;
    padding: 0 32px;
  }
`;

export const GnbLogo = styled.a`
  width: 133px;
  height: 24px;
  color: #6d6afe;
  font-weight: 800;
  text-decoration-line: none;
`;

export const ProfileInfo = styled.div`
  display: flex;
  column-gap: 6px;
`;

export const GnbButton = styled(Button)`
  width: 128px;
  height: 53px;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
`;
