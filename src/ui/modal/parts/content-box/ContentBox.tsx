import { MouseEventHandler, ReactNode } from "react";
import styles from "./ContentBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentBoxProps = {
  header: ReactNode;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * ContentBox 컴포넌트는 모달 창의 내용을 구성하는 박스를 렌더링합니다.
 *
 * @component
 * @example
 * const header = <h1>제목</h1>;
 * const content = <p>내용</p>;
 * 
 * return (
 *   <ContentBox
 *     header={header}
 *     content={content}
 *     onCloseClick={() => console.log("Close Clicked")}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.header - 모달 창의 헤더 부분에 렌더링될 요소입니다.
 * @param {ReactNode} props.content - 모달 창의 콘텐츠 부분에 렌더링될 요소입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onCloseClick - 닫기 버튼 클릭 시 호출되는 함수입니다.
 * 
 * @returns {JSX.Element} 모달 창의 헤더와 콘텐츠를 포함하는 박스를 렌더링하는 컴포넌트입니다.
 */
export const ContentBox = ({
  header,
  content,
  onCloseClick,
}: ContentBoxProps) => {
  return (
    <div className={cx("container")}>
      <button onClick={onCloseClick}>
        <img
          className={cx("close")}
          src="images/close.svg"
          alt="X모양 닫기 버튼"
        />
      </button>
      <div className={cx("items")}>
        {header}
        {content}
      </div>
    </div>
  );
};
