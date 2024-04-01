// root css

import { DefaultTheme } from 'styled-components';

const theme : DefaultTheme  = {
  /* 타이틀 사이즈 pc 기준(px) - 48,64*/
  title: {
    ls: "4rem",
    ms: "3rem",
  },
  /* 폰트 사이트(px)- 13,14,16,18,20 */
  font: {
    l: "1.25rem",
    lm: "1.125rem",
    m: "1rem",
    sm: "0.875rem",
    s: "0.815rem",
  },
  color: {
    primary: "#6D6AFE",
    red: "#FF5B56",
    black: "#111322",
    white: "#FFFFFF",
    gray3: "#3E3E43",
    gray6: "#666666",
    gray9: "#9FA6B2",
    grayc: "#CCD5E3",
    graye: "#E7EFFB",
    grayf: "#F0F6FF",
  },
  bgColor: {
    gradient: "linear-gradient(to right, #6D6AFE, #6AE3FE)",
  },
  /* 
  window size(px)
  pc:1200이상(1200), table: 768~1199(1199)
  mobile: 375~767(767), mobile2: 375이하
  */
  screenSize: {
    pc: "75rem",
    tablet: "74.9375rem",
    moLarge: "47.9375rem",
    moSmall: "23.4375rem",
    minWidth: "18.75rem"
  },
  /* 
  section inner size(px)
  l:1060, m:998, s:400
  */
  innerSize: {
    l:'70.25rem',
    m:'66.375rem',
    s:'29rem'
  }
};

export { theme };