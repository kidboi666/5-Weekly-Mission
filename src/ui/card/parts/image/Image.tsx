import styles from "./Image.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

type ImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

export const Image = ({ imageSource, isZoomedIn, alt }: ImageProps) => {
  return (
    <div className={cx("container")}>
      <img
        src={imageSource ?? DEFAULT_IMAGE}
        className={cx("image", { zoomin: isZoomedIn })}
        alt={alt}
      />
    </div>
  );
};
