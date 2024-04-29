import { useState } from "react";
import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, setFolderName }) => {
  const [button, setButton] = useState(true);
  const [buttonColor, setButtonColor] = useState();

  function onClick() {
    setFolderName("전체");
    setButtonColor();
    setButton(true);
  }

  function clickButton(event, index) {
    setFolderName(event.target.value);
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
            value={item.name}
            className={cx(buttonColor === index ? "buttonClick" : "button")}
            onClick={(event) => clickButton(event, index)}
            type="button"
          >
            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
};
