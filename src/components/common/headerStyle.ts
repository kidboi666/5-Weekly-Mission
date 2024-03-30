import styled, { css } from "styled-components";
import { DFlaxAlignCenter, DFlaxAlignCenterBtw, LinkGradient } from "../../styles/commonStyle";
import { theme } from "../../styles/theme";

export const HaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-width: ${theme.screenSize.minWidth};
`
export const HeaderInner = styled(DFlaxAlignCenterBtw)`
  width: calc(100% - 21rem);
  padding: 1.25rem 2rem;
  margin: 0 auto;
  transition: all 0.3s;
  a { 
    display: block;
  }
  @media screen and (max-width: ${theme.screenSize.pc}) {
    width: 100%;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 0.813rem 2rem;
  }
`
export const HeaderLogo = styled.h1`
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    img {
      width: auto;
      height: 1rem;
      transition: all 0.3s;
    }
  }
`
export const HeaderControl = styled.div`
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    ${LinkGradient} {
        width: 5rem;
        line-height: 2.313rem;
        font-size: ${theme.font.sm};
      }
  }
`
export const HeaderUserInfo = styled(DFlaxAlignCenter)`
  gap: 6px;
`
export const Email = styled.span`
  color: ${theme.color.gray3};
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    display: none;
  }
`
