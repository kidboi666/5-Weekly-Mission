import { useState, useEffect } from "react";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, folderName, setFolderName }) => {
  const [button, setButton] = useState(true);
  const [buttonColor, setButtonColor] = useState();

  function onClick() {
    setFolderName("전체");
    setButtonColor();
    setButton(true);
  }

  function clickButton(item, index) {
    setFolderName(item.name);
    setButtonColor(index);
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
            className={cx(buttonColor === index ? "buttonClick" : "button")}
            onClick={(event) => clickButton(item, index)}
            type="button"
          >
            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
};
