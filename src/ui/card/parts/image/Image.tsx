import styles from "./Image.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

type ImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

/**
 * Image 컴포넌트는 카드의 이미지를 표시하며, 이미지가 확대된 상태를 시각적으로 반영합니다.
 *
 * @component
 * @example
 * return (
 *   <Image
 *     imageSource="image.jpg"
 *     isZoomedIn={true}
 *     alt="이미지 설명"
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.imageSource - 이미지의 소스 URL입니다. 값이 없을 경우 기본 이미지가 사용됩니다.
 * @param {boolean} props.isZoomedIn - 이미지가 확대된 상태인지 여부를 나타냅니다.
 * @param {string} props.alt - 이미지의 대체 텍스트입니다.
 * 
 * @returns {JSX.Element} 이미지를 표시하는 컴포넌트입니다.
 */
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
