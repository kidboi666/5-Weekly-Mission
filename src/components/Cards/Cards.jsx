import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { time } from "../../util/time";
import { contentDate } from "../../util/contentDate";
import { Link } from "react-router-dom";
import { NO_IMAGE, STAR_ICON, COLOR_STAR_ICON, KEBAB_ICON } from "./constant";
import { useEffect, useRef, useState } from "react";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { AddModal } from "../AddModal/AddModal";
import { AddFolderModal } from "../AddFolderModal";

const cx = classNames.bind(styles);

export const Cards = ({ item, folders }) => {
  console.log("?", item);

  const imageData = item.imageSource;
  const folderImageData = item.image_source;
  const [starImage, setStarImage] = useState(STAR_ICON);
  const [kebab, setKebab] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addemodal, setAddModal] = useState(false);
  const kebabRef = useRef(null);

  const handleStarToggle = () => {
    starImage === STAR_ICON
      ? setStarImage(COLOR_STAR_ICON)
      : setStarImage(STAR_ICON);
  };

  const handleKebabToggle = () => {
    setKebab(!kebab);
  };

  const handleKebabBlur = () => {};

  const handleDelete = () => {
    setDeleteModal(true);
  };

  const handleAdd = () => {
    setAddModal(true);
  };

  // 케밥 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleKebabTest = (event) => {
      if (kebab && !kebabRef.current.contains(event.target)) {
        setKebab(false);
      }
    };

    document.addEventListener("mousedown", handleKebabTest);

    return () => {
      document.removeEventListener("mousedown", handleKebabTest);
    };
  }, [kebab, kebabRef]);

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

      <button type="button" onClick={handleStarToggle}>
        <img
          className={cx("star-icon")}
          src={starImage}
          alt="즐겨찾기 아이콘"
        />
      </button>

      <button
        type="button"
        onClick={handleKebabToggle}
        onBlur={handleKebabBlur}
      >
        <img className={cx("kebab-icon")} src={KEBAB_ICON} alt="케밥 아이콘" />
      </button>
      {kebab && (
        <div className={cx("kebab-menu")} ref={kebabRef}>
          <button className={cx("kebab-option")} onClick={handleDelete}>
            삭제하기
          </button>

          <button className={cx("kebab-option")} onClick={handleAdd}>
            폴더에 추가
          </button>
        </div>
      )}

      {deleteModal && (
        <DeleteModal modal={deleteModal} setModal={setDeleteModal}>
          <h2>링크 삭제</h2>
          <p>{item.url}</p>
        </DeleteModal>
      )}

      {addemodal && (
        <AddFolderModal
          modal={addemodal}
          setModal={setAddModal}
          url={item.url}
          folders={folders}
        />
      )}
    </div>
  );
};
