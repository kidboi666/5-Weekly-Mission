import 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: {
      ls: string,
      ms: string,
    },
    font: {
      ls: string,
      l: string,
      lm: string,
      m: string,
      sm: string,
      s: string,
    },
    color: {
      primary: string,
      red: string,
      black: string,
      white: string,
      gray3: string,
      gray6: string,
      gray9: string,
      grayc: string,
      graye: string,
      grayf: string,
    },
    bgColor: {
      gradient: string,
    },
    screenSize: {
      pc: string,
      tablet: string,
      moLarge: string,
      moSmall: string,
      minWidth: string,
    },
    innerSize: {
      l:string,
      m:string,
      s:string,
    }
  }
}