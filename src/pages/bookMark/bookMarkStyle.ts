import styled from "styled-components";
import { ContainBodyInner, ContainHeadInner, InnerLarge, innerLarge } from "../../styles/commonStyle";

export const FolderContainHeadInner = styled(ContainHeadInner)`
  img {
    width: 60px;
  }
  p {
    line-height: 24px;
    padding-top: 12px;
  }
  h2 {
    line-height: 48px;
    padding-top: 20px;
  }
`
export const FolderContainBodyInner = styled(ContainBodyInner)`
${innerLarge}
`
export const PostCardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 20px;
`