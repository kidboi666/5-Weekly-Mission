import styles from "./Content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentProps = {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
};

/**
 * Content 컴포넌트는 카드의 내용을 표시하며, 경과 시간, 설명, 생성 일자를 포함합니다.
 * 또한, 카드가 호버된 상태를 시각적으로 반영합니다.
 *
 * @component
 * @example
 * return (
 *   <Content
 *     elapsedTime="5분 전"
 *     description="이것은 설명입니다."
 *     createdAt="2022-01-01"
 *     isHovered={true}
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.elapsedTime - 경과 시간을 나타내는 텍스트입니다.
 * @param {string} props.description - 카드의 설명 텍스트입니다.
 * @param {string} props.createdAt - 생성 일자를 나타내는 텍스트입니다.
 * @param {boolean} props.isHovered - 카드가 호버된 상태인지 여부를 나타냅니다.
 * 
 * @returns {JSX.Element} 카드의 내용을 표시하는 컴포넌트입니다.
 */
export const Content = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: ContentProps) => {
  return (
    <div className={cx("container", { hovered: isHovered })}>
      <span className={cx("elapsed-time")}>{elapsedTime}</span>
      <p className={cx("description")}>{description}</p>
      <span className={cx("created-at")}>{createdAt}</span>
    </div>
  );
};
