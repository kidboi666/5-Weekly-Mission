// 전역 공통 사용 css

import styled, { css } from "styled-components";
import { theme } from "./theme";

// ====  정렬  =====

export const  dflex = css`
  display: flex;
`
export const  dflexCenter = css`
  ${dflex}
  align-items: center;
`
export const  dflexBtw = css`
  ${dflexCenter}
  justify-content: space-between;
`
export const DFlaxAlignCenter = styled.div`
  ${dflex}
  align-items: center;
`
export const DFlaxAlignStart = styled.div`
 ${dflex}
  align-items: flex-start;
`
export const DFlaxAlignCenterBtw = styled(DFlaxAlignCenter)`
  justify-content: space-between;
`

// ====  타이틀  ====

export const TitleLs = styled.h2`
  font-size: ${theme.title.ls};
  line-height: 5rem;
  font-weight: 700; 
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: calc(${theme.title.ls} / 2);
    line-height: 2.625rem;
  }
`
export const TitleMs = styled.h3`
  font-size: ${theme.title.ms};
  line-height: 5rem;
  font-weight: 700;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: calc(${theme.title.ms} / 2);
    line-height: 1.79rem;
  }
`
export const ModlaTitle = styled.h2`
  font-size: ${theme.font.l};
  font-weight: 700;
  text-align: center;
`
// ====  폰트  ====

export const bold = css`
  font-weight: 700;
`

export const font24 = css`
  font-size: 1.5rem;
  line-height: 1.8125rem;
  font-weight: 600;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

export const Font = styled.div`
  &.font--size {
    &-ls {
      font-size: ${theme.font.ls};
    }
    &-l {
      font-size: ${theme.font.l};
    }

    &-ms {
      font-size: ${theme.font.lm};
    }

    &-m {
      font-size: ${theme.font.m};
      line-height: 1.5rem;
    }

    &-s {
      font-size: ${theme.font.sm};
      line-height: 1.375rem;
    }

    &-ss {
      font-size: ${theme.font.s};
    }
  }
`;

export interface IFont {
  $fontSize?: number,
  $lineHeight?:number,
  $weight?:string,
  $color?:string
}

export const customFont = styled.div<IFont>`
  ${({ $weight, $fontSize, $lineHeight, $color }) => `
    font-size: ${$fontSize || theme.font.m}px;
    line-height: ${$lineHeight || 1.2}px;
    font-weight: ${$weight || '400' };
    color:${$color || '#000' };
  `}
`

// ====  ellipsis  ====

export const EllipsisLine  = styled.div<{$tline?: number}>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({$tline}) => $tline};
  -webkit-box-orient: vertical;
`

// ====  profile  ====

export interface IProfileImg {
  $bgImageUrl?: string,
}

export const Profile = styled.span<IProfileImg>`
  width: 28px;
  height: 28px;
  border-radius: 50em;
  background-image: url(${({$bgImageUrl}) => $bgImageUrl || "/assets/icon/icon_user.svg"});
  overflow: hidden;
`
// ====  section  ====
export const ContainHead = styled.section`
  
`
export const ContainBody = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

// ====  section inner  ====
export const inner = css`
  width:100%;
  margin: 0 auto;
`
export const innerLarge = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`
export const innerMedium = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`
export const innerSmall = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`

export const InnerLarge = styled.div`
  ${innerLarge}
`
export const InnerMedium = styled.div`
  ${innerMedium}
`
export const InnerSmall = styled.div`
  ${innerSmall}
`
export const ContainHeadInner = styled.div`
  padding: 1.25rem 2rem 3.75rem;
  text-align: center;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 0.625rem 2rem 2.5rem;
  }
`
export const ContainBodyInner = styled.div`
  flex: 1;
  padding: 40px 2rem 6.25rem;
  text-align: center;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 1.25rem 2rem 3.75rem;
  }
`


// ====  position  ====
export const Relative = styled.div`
  position: relative;
`