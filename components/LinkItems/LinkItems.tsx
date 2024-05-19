import { useState } from "react";
import styles from "./LinkItems.module.scss";
import classNames from "classnames/bind";
import { DeleteModal, AddModal, ShareModal } from "..";
import { SEARCH_ICON, PEN_ICON, WASTEBASKET_ICON } from "./constant";

const cx = classNames.bind(styles);

const choiceItems = [
  {
    id: 1,
    image: SEARCH_ICON,
    text: "공유",
  },
  {
    id: 2,
    image: PEN_ICON,
    text: "이름 변경",
  },
  {
    id: 3,
    image: WASTEBASKET_ICON,
    text: "삭제",
  },
];

export const LinkItems = ({ folderName }) => {
  const [deletemodal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const handleClick = (text) => {
    text === "삭제" && setDeleteModal(true);
    text === "이름 변경" && setAddModal(true);
    text === "공유" && setShareModal(true);
  };

  return (
    <div>
      <div className={cx("container")}>
        <h1 className={cx("title")}>{folderName}</h1>

        {folderName !== "전체" && (
          <div className={cx("items")}>
            {choiceItems.map((item) => {
              return (
                <button
                  className={cx("button")}
                  key={item.id}
                  onClick={() => handleClick(item.text)}
                >
                  <img src={item.image} alt={item.text} />
                  <p className={cx("text")}>{item.text}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {deletemodal && (
        <DeleteModal modal={deletemodal} setModal={setDeleteModal}>
          <h2>폴더 삭제</h2>
          <p>{folderName}</p>
        </DeleteModal>
      )}

      {addModal && (
        <AddModal modal={addModal} setModal={setAddModal}>
          <h2>폴더 이름 변경</h2>
          <input type="text" placeholder={folderName} />
          <button type="button">변경하기</button>
        </AddModal>
      )}

      {shareModal && (
        <ShareModal modal={shareModal} setModal={setShareModal}>
          <h2>폴더 공유</h2>
          <p>{folderName}</p>
        </ShareModal>
      )}
    </div>
  );
};
