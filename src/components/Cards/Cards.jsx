import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { time } from "../../util/time";
import { contentDate } from "../../util/contentDate";
import { Link } from "react-router-dom";
import { NO_IMAGE, STAR_ICON, COLOR_STAR_ICON, KEBAB_ICON } from "./constant";
import { useState } from "react";
import { Modal } from "../Modal";

const cx = classNames.bind(styles);

export const Cards = ({ item }) => {
  const imageData = item.imageSource;
  const folderImageData = item.image_source;
  const [kebab, setKebab] = useState(false);
  const [modal, setModal] = useState(false);

  const handleKebab = () => {
    setKebab(!kebab);
  };

  const handleKebabBlur = () => {};

  const handleDelete = () => {
    setModal(true);
  };

  return (
    <div className={cx("card")}>
      <Link to={item.url} target="_blank">
        <div className={cx("card-image-block")}>
          <img
            className={cx("card-image")}
            src={imageData ?? folderImageData ?? NO_IMAGE}
            alt={item.title}
          />
        </div>

        <div className={cx("card-block")}>
          <p className={cx("time-text")}>{time(item.createdAt)}</p>

          <div className={cx("center-text")}>
            <p>{item.description}</p>
          </div>

          <p className={cx("date-text")}>
            {contentDate(item.createdAt ?? item.created_at)}
          </p>
        </div>
      </Link>

      <button type="button">
        <img
          className={cx("star-icon")}
          src={STAR_ICON}
          alt="즐겨찾기 아이콘"
        />
      </button>

      <button type="button" onClick={handleKebab} onBlur={handleKebabBlur}>
        <img className={cx("kebab-icon")} src={KEBAB_ICON} alt="케밥 아이콘" />
      </button>
      {kebab && (
        <div className={cx("kebab-menu")}>
          <button className={cx("kebab-option")} onClick={handleDelete}>
            삭제하기
          </button>
          <button className={cx("kebab-option")}>폴더에 추가</button>

          {modal && <Modal modal={modal} setModal={setModal} link={item.url} />}
        </div>
      )}
    </div>
  );
};
