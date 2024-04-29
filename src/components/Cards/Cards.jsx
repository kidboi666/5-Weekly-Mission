import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { time } from "../../util/time";
import { contentDate } from "../../util/contentDate";
import { Link } from "react-router-dom";
import { NO_IMAGE, STAR_ICON, PURPLESTAR_ICON, KEBAB_ICON } from "./constant";

const cx = classNames.bind(styles);

export const Cards = ({ item }) => {
  const imageData = item.imageSource;
  const folderImageData = item.image_source;

  return (
    <div className={cx("card")}>
      <Link to={item.url} target="_blank">
        <div className={cx("card_image_block")}>
          <img
            className={cx("card_image")}
            src={imageData ?? folderImageData ?? NO_IMAGE}
            alt={item.title}
          />
        </div>
        <div className={cx("cardText")}>
          <p>{time(item.createdAt)}</p>
          <div className={cx("center_text")}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
          <p>{contentDate(item.createdAt ?? item.created_at)}</p>
        </div>
      </Link>

      <button type="button">
        <img
          className={cx("star_icon")}
          src={STAR_ICON}
          alt="즐겨찾기 아이콘"
        />
      </button>

      <button type="button">
        <img
          className={cx("kebab_icon")}
          src={KEBAB_ICON}
          alt="더보기 아이콘"
        />
      </button>
    </div>
  );
};
