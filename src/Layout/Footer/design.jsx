import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterFrame = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 160px;
  background-color: #111322;
  padding: 32px 104px 64px 104px;
  @media (max-width: 767px) {
    padding: 32px 32px 32px 32px;
  }
`;
export const ContentsFrame = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px 60px;
  font-family: "Acme";
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 767px) {
    height: 96px;
    position: relative;
    font-family: "Acme";
    font-size: 16px;
    font-weight: 400;
  }
`;
export const Codeit = styled(Link)`
  height: 20px;
  color: #676767;
  @media (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const Linkbox = styled.div`
  display: flex;
  height: 20;
  gap: 30px;
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 20;
    gap: 30px;
  }
`;
export const Iconbox = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
export const StyledLink = styled(Link)`
  color: #cfcfcf;
  text-decoration-line: none;
`;
export const FooterTemplate = styled.footer`
  width: 100%;
  height: 280px;
  padding-top: 120px;
  @media (max-width: 767px) {
    height: 200px;
    padding-top: 40px;
  }
`;
