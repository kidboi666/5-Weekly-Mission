import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { defaultImage } from "./constant";

const cx = classNames.bind(styles);

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  return (
    <img
      style={{ backgroundImage: `url(${imageSource ?? defaultImage})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      alt={alt}
    />
  );
};
