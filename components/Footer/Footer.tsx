import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import {
  FACEBOOK_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
} from "./constant";

const cx = classNames.bind(styles);

const iconItems = [
  {
    id: 1,
    image: FACEBOOK_ICON,
    link: "https://www.facebook.com/",
    text: "페이스북 바로가기 아이콘",
  },
  {
    id: 2,
    image: TWITTER_ICON,
    link: "https://twitter.com/?lang=ko",
    text: "트위터 바로가기 아이콘",
  },
  {
    id: 3,
    image: YOUTUBE_ICON,
    link: "https://www.youtube.com/?app=desktop&hl=ko&gl=KR",
    text: "유튜브 바로가기 아이콘",
  },
  {
    id: 4,
    image: INSTAGRAM_ICON,
    link: "https://www.instagram.com/",
    text: "인스타그램 바로가기 아이콘",
  },
];

export const Footer = () => {
  return (
    <div className={cx("container")}>
      <p className={cx("date-text")}>©codeit - 2023</p>

      <div className={cx("link-text")}>
        <Link href="PrivacyPolicy">
          <span>Privacy Policy</span>
        </Link>

        <Link href="FAQ">
          <span>FAQ</span>
        </Link>
      </div>

      <div className={cx("icon")}>
        {iconItems.map((item) => {
          return (
            <Link key={item.id} href={item.link} target="_blank">
              <Image className={cx("image")} src={item.image} alt={item.text} width={100} height={100}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
