import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import {
  FACEBOOK_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
  INSTAGRAM_ICON,
} from "./constant";

const cx = classNames.bind(styles);

const facebook = "https://www.facebook.com/";
const twitter = "https://twitter.com/?lang=ko";
const youtube = "https://www.youtube.com/?app=desktop&hl=ko&gl=KR";
const instagram = "https://www.instagram.com/";

const iconItems = [
  {
    id: 1,
    image: FACEBOOK_ICON,
    link: facebook,
    text: "페이스북 바로가기 아이콘",
  },
  {
    id: 2,
    image: TWITTER_ICON,
    link: twitter,
    text: "트위터 바로가기 아이콘",
  },
  {
    id: 3,
    image: YOUTUBE_ICON,
    link: youtube,
    text: "유튜브 바로가기 아이콘",
  },
  {
    id: 4,
    image: INSTAGRAM_ICON,
    link: instagram,
    text: "인스타그램 바로가기 아이콘",
  },
];

export const Footer = () => {
  return (
    <div className={cx("container")}>
      <p className={cx("date_text")}>©codeit - 2023</p>

      <div className={cx("link_text")}>
        <Link to="PrivacyPolicy">
          <span>Privacy Policy</span>
        </Link>
        <Link to="FAQ">
          <span>FAQ</span>
        </Link>
      </div>

      <div className={cx("icon")}>
        {iconItems.map((item) => {
          return (
            <Link key={item.id} to={item.link} target="_blank">
              <img src={item.image} alt={item.text} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
