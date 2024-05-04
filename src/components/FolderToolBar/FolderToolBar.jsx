import { useState } from "react";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { ADD_ICON, WHITE_ADD_ICON } from "./constant";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, setFolderName, setFolderId }) => {
  const [button, setButton] = useState(true);
  const [buttonIndex, setButtonIndex] = useState();

  function onClick() {
    setFolderName("전체");
    setFolderId();
    setButtonIndex();
    setButton(true);
  }

  function clickButton(item, index) {
    setFolderName(item.name);
    setFolderId(item.id);
    setButtonIndex(index);
    setButton(false);
  }

  return (
    <div className={cx("container")}>
      <div className={cx("toolBar")}>
        <button
          className={cx(button ? "buttonClick" : "button")}
          onClick={onClick}
          type="button"
        >
          <span>전체</span>
        </button>

        {folders.map((item, index) => {
          return (
            <button
              key={item.id}
              className={cx(buttonIndex === index ? "buttonClick" : "button")}
              onClick={() => clickButton(item, index)}
              type="button"
            >
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      <button className={cx("add-button")}>
        <div className={cx("text")}>
          <span>폴더 추가</span>
          <img src={ADD_ICON} alt="폴더 추가" />
        </div>
      </button>
    </div>
  );
};
