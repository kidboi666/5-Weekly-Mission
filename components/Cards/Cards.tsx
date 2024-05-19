import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Cards.module.scss";
import classNames from "classnames/bind";
import { time, contentDate } from "../../utils";
import { DeleteModal, AddFolderModal } from "..";
import { NO_IMAGE, STAR_ICON, COLOR_STAR_ICON, KEBAB_ICON } from "./constant";

const cx = classNames.bind(styles);

export const Cards = ({ item, folders }) => {
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

  // 케밥 클릭 시
  const handleKebabToggle = () => {
    setKebab(!kebab);
  };

  // 삭제하기 클릭 시 모달
  const handleDelete = () => {
    setDeleteModal(true);
  };

  // 폴더에 추가 클릭 시 모달
  const handleAdd = () => {
    setAddModal(true);
  };

  // 케밥 영역 밖 클릭 시 닫기
  useEffect(() => {
    const handleKebab = (event) => {
      if (kebab && !kebabRef.current.contains(event.target)) {
        setKebab(false);
      }
    };

    document.addEventListener("mousedown", handleKebab);

    return () => {
      document.removeEventListener("mousedown", handleKebab);
    };
  }, [kebab, kebabRef]);

  return (
    <div className={cx("card")}>
      <Link href={item.url} target="_blank">
        <div className={cx("card-image-block")}>
          <img
            className={cx("card-image")}
            src={item.imageSource ?? item.image_source ?? NO_IMAGE}
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

      <img
          onClick={handleStarToggle}
        className={cx("star-icon")}
        src={starImage}
        alt="즐겨찾기 아이콘"
      />

      <img 
        onClick={handleKebabToggle}
        className={cx("kebab-icon")} 
        src={KEBAB_ICON} 
        alt="케밥 아이콘" 
      />

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
