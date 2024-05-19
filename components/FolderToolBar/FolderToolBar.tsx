import { useState } from "react";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { AddModal } from "..";
import { ADD_ICON } from "./constant";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, setFolderName, setFolderId }) => {
  const [button, setButton] = useState(true);
  const [buttonIndex, setButtonIndex] = useState(null);
  const [addemodal, setAddModal] = useState(false);

  function onClick() {
    setFolderName("전체");
    setFolderId(null);
    setButtonIndex(null);
    setButton(true);
  }

  function clickButton(item, index) {
    setFolderName(item.name);
    setFolderId(item.id);
    setButtonIndex(index);
    setButton(false);
  }

  const handleClick = () => {
    setAddModal(true);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("folders-block")}>
        <button
          className={cx(button ? "button-click" : "button")}
          onClick={onClick}
          type="button"
        >
          전체
        </button>

        {folders.map((item, index) => {
          return (
            <button
              key={item.id}
              className={cx(buttonIndex === index ? "button-click" : "button")}
              onClick={() => clickButton(item, index)}
              type="button"
            >
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      <div className={cx("add-button")}>
        <button className={cx("text")} onClick={handleClick}>
          <p className={cx("button-text")}>폴더 추가</p>
          <img src={ADD_ICON} alt="폴더 추가" />
        </button>
      </div>

      {addemodal && (
        <AddModal modal={addemodal} setModal={setAddModal}>
          <h2>폴더 추가</h2>
          <input type="text" placeholder="내용 입력" />
          <button type="button">추가하기</button>
        </AddModal>
      )}
    </div>
  );
};
