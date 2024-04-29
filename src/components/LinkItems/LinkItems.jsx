import styles from "./LinkItems.module.scss";
import classNames from "classnames/bind";
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
  return (
    <div className={cx("container")}>
      <h1>{folderName}</h1>

      <div className={cx("items")}>
        {choiceItems.map((item) => {
          return (
            <button className={cx("button")} key={item.id}>
              <img src={item.image} alt={item.text} />
              <p className={cx("text")}>{item.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
