interface IPageLayoutConfig {
  [key:string] : {
    header:boolean
    footer:boolean
  }
}

export type urlName = keyof IPageLayoutConfig;

export const pageLayoutConfig: IPageLayoutConfig = {
  main: {
    header:true,
    footer:true,
  },
  folder: {
    header:true,
    footer:true,
  },
  faq: {
    header:true,
    footer:true,
  },
  login: {
    header:false,
    footer:false,
  },
  signup: {
    header:false,
    footer:false,
  },
  policy: {
    header:true,
    footer:true,
  },
  notfound: {
    header:true,
    footer:true,
  }
};