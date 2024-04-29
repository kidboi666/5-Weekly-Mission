import { useState } from "react";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";

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
  );
};
