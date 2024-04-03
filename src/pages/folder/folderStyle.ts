import styled from "styled-components";
import { ContainBodyInner, ContainHeadInner, innerLarge } from "../../styles/commonStyle";
import { theme } from "../../styles/theme";

export const FolderContainHeadInner = styled(ContainHeadInner)`
  img {
    width: 3.75rem;
  }
  p {
    line-height: 1.5rem;
    padding-top: 0.75rem;
  }
  h2 {
    line-height: 3rem;
    padding-top: 1.25rem;
  }
`
export const FolderContainBodyInner = styled(ContainBodyInner)`
${innerLarge}
`
export const PostCardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5625rem 1.25rem;
  @media screen and (max-width: 1124px){
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1.5rem;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}){
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }
`