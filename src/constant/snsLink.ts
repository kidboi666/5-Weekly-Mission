export interface ISnsLink {
  id: string;
  src: string;
  link: string;
}
export const imageSnsArr: ISnsLink[] = [
  {
    id: "Facebook",
    src: "/assets/icon/icons_face.svg",
    link: "https://www.facebook.com/?locale=ko_KR",
  },
  {
    id: "Twitter",
    src: "/assets/icon/icons_twt.svg",
    link: "https://twitter.com/?lang=ko",
  },
  {
    id: "YouTube",
    src: "/assets/icon/icons_you.svg",
    link: "https://www.youtube.com/",
  },
  {
    id: "Instagram",
    src: "/assets/icon/icons_ins.svg",
    link: "https://www.instagram.com/",
  },
];