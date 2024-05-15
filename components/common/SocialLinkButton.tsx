import { IImageSnsArr } from "./Footer";

export default function SocialLinkButton({ id, src, link }: IImageSnsArr) {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={id + "이동 버튼"} />
    </a>
  );
}
