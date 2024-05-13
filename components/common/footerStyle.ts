import { DFlaxAlignCenter } from "@/styles/commonStyle";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const FootWrap = styled.footer`
  background-color: ${theme.color.black};
`
export const FootInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: calc(100% - 4.75rem);
  padding: 2rem 2rem 6.5rem;
  margin: 0 auto;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    grid-template-columns: auto;
    grid-template-areas: "a2 a3" "a1 a1";
    max-width: 100%;
    padding: 2rem;
    gap: 3.75rem 1.25rem;
  }
`
export const FootSign = styled.div`
  a {
    color: #676767;
   }
   @media screen and (max-width: ${theme.screenSize.moLarge}) {
    grid-area: a1;
   }
`
export const FootNav = styled(DFlaxAlignCenter)`
  justify-content: center;
  gap: 0.938rem;
  a {
    color: #CFCFCF;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    justify-content: flex-start;
    grid-area: a2;
    flex-wrap: wrap;
   }
`
export const FootSocial = styled(DFlaxAlignCenter)`
  justify-content: flex-end;
  gap: 0.75rem;
  a {
    display: block;
    width: 1.25rem;
    color: var(--color-light);
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    grid-area: a3;
    flex-wrap: wrap;
   }
`