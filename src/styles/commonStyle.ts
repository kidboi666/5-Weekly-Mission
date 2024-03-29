// 전역 공통 사용 css

import styled, { css } from "styled-components";
import { theme } from "./theme";

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
  @media screen and (max-width: ${theme.screenSize.mo}) {
    font-size: calc(${theme.title.ls} / 2);
    line-height: 2.625rem;
  }
`
export const TitleMs = styled.h3`
  font-size: ${theme.title.ms};
  line-height: 5rem;
  font-weight: 700;
  @media screen and (max-width: ${theme.screenSize.mo}) {
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
  size?: number,
  lineHeight?:number,
  weight?:string,
  color?:string
}

export const customFont = styled.div<IFont>`
  ${({ size, lineHeight, weight, color }) => `
    font-size: ${size || theme.font.m}px;
    line-height: ${lineHeight || 1.2}px;
    font-weight: ${weight || '400' };
    color:${color || '#000' };
  `}
`