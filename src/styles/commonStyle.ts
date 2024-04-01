// 전역 공통 사용 css

import styled, { css } from "styled-components";
import { theme } from "./theme";
import { NavLink } from "react-router-dom";

// ====  정렬  =====

const  dflex = css`
  display: flex;
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

// ====  폰트  ====

export const Font = styled.div`
  &.font__size {
    &__l {
      font-size: ${({ theme }) => theme.font.l};
    }

    &__ms {
      font-size: ${({ theme }) => theme.font.lm};
    }

    &__m {
      font-size: ${({ theme }) => theme.font.m};
      line-height: 1.5rem;
    }

    &__s {
      font-size: ${({ theme }) => theme.font.sm};
      line-height: 1.375rem;
    }

    &__ss {
      font-size: ${({ theme }) => theme.font.s};
    }
  }
`;

export interface IFont {
  fontSize?: number,
  lineHeight?:number,
  weight?:string,
  color?:string
}

export const customFont = styled.div<IFont>`
  ${({ weight, fontSize, lineHeight, color }) => `
    font-size: ${fontSize || theme.font.m}px;
    line-height: ${lineHeight || 1.2}px;
    font-weight: ${weight || '400' };
    color:${color || '#000' };
  `}
`

// ====  ellipsis  ====
export const EllipsisLine  = styled.div<{line:number}>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({line}) => line};
  -webkit-box-orient: vertical;
`


// ====  버튼  ====

export interface IButton {
  fontSize?: number,
  height?:number,
  width?:number,
}

export const gradient = css<IButton> `
  ${({ width, fontSize, height }) => `
  font-size: ${fontSize || theme.font.m}px;
  line-height: ${height || 36}px;
  width: ${width+'px' || 100+'%' };
  `}
  color: #fff;
  font-weight: 600;
  text-align:center;
  background:${theme.bgColor.gradient};
  border-radius: 8px;
`
// button
export const BtnGradient = styled.button<IButton>`
 ${gradient}
`
// Link
export const LinkGradient = styled(NavLink)<IButton>`
 ${gradient}
`;


// ====  profile  ====

export interface IProfileImg {
  bgImageUrl?: string,
}

export const Profile = styled.span<IProfileImg>`
  width: 28px;
  height: 28px;
  border-radius: 50em;
  background-image: url(${({bgImageUrl}) => bgImageUrl || "/assets/icon/icon_user.svg"});
  overflow: hidden;
`
// ====  section  ====
export const ContainHead = styled.section`
  
`
export const ContainBody = styled.section`
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
  margin: 0 auto;
  padding: 20px 32px 60px;
  width:100%;
  text-align: center;
`
export const ContainBodyInner = styled.div`
  margin: 0 auto;
  padding: 40px 32px 100px;
  width:100%;
  text-align: center;
`