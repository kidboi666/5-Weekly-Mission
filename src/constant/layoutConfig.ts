interface IPageLayoutConfig {
  [key: string]: {
    [key: string]: boolean;
  };
}

export type urlName = keyof IPageLayoutConfig;

export const pageLayoutConfig: IPageLayoutConfig = {
  main: {
    header: true,
    footer: true,
  },
  folder: {
    header: true,
    footer: true,
  },
  faq: {
    header: true,
    footer: true,
  },
  signin: {
    header: false,
    footer: false,
  },
  signup: {
    header: false,
    footer: false,
  },
  policy: {
    header: true,
    footer: true,
  },
  notfound: {
    header: true,
    footer: true,
  },
};
