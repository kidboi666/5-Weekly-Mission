import styled, { css } from "styled-components";
import { ContainBodyInner, ContainHeadInner, DFlaxAlignCenter, dflexBtw, innerLarge } from "../../styles/commonStyle";
import { theme } from "../../styles/theme";

export const ShareHeadInner = styled(ContainHeadInner)`
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

export const LinkAddHeadInner = styled.div`
  position: relative;
  max-width: 864px;
  margin: 60px auto 90px;
  padding: 0 32px 0;
  .button__gradient {
    position: absolute;
    right: 52px;
    top: 16px;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    margin: 20px auto 40px;
    .button__gradient {
      right: 42px;
      top: 8px;
    }
  }
`
export const BodyInner = styled(ContainBodyInner)`
  ${innerLarge}
`
export const PostCardWrap = styled.div`
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
export const EmptyBox = styled.div`
  padding: 41px 0 35px;
  line-height: 24px;
  text-align: center;
`
export const FolderBtnBox = css`
  ${dflexBtw}
  padding-bottom: 24px;
  gap: 0 32px;
`
export const BookmarkBox = styled.div`
  ${FolderBtnBox}
  .button__icon-after {
    color: ${theme.color.primary};
    font-weight: 500;
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding-bottom: 28px;
    .button__icon-after {
      position: fixed;
      bottom:101px;
      left: 50%;
      padding-right: 16px;
      width: 127px;
      line-height: 33px;
      color: ${theme.color.white};
      border: 1px solid ${theme.color.white};
      border-radius: 50em;
      background: ${theme.color.primary} url('/assets/icon/icon_white_add.svg') no-repeat;
      background-position: right 22px center;
      transform: translateX(-50%);
      z-index: 5;
    }
  }
`
export const ShareBox = styled.div`
  ${FolderBtnBox}
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    h3 {
      padding-bottom: 12px;
    }
  }
`
export const BookMarkBtnList = styled(DFlaxAlignCenter)`
  flex: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap:8px;
`
export const ShareListBtn = styled(DFlaxAlignCenter)`
  gap:0 12px;
  .button__icon-before {
    font-size: 14px;
    font-weight: 600;
    line-height: 29px;
    color: ${theme.color.gray9};
  }
`
export const BoxLinkSearch = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    margin-bottom:32px;
  }
`