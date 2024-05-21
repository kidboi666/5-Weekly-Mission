import styles from "./Template.module.scss";
import classNames from "classnames/bind";
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Portal } from "@/src/ui";

const cx = classNames.bind(styles);

type TemplateProps = {
  children: ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

/**
 * Template 컴포넌트는 모달 창의 기본 레이아웃을 렌더링합니다.
 * 
 * @component
 * @example
 * return (
 *   <Template
 *     isOpen={true}
 *     onBackdropClick={() => console.log("Backdrop Clicked")}
 *     onKeyDown={(e) => console.log("Key Down", e)}
 *   >
 *     <div>모달 내용</div>
 *   </Template>
 * );
 * 
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 모달 창 내부에 렌더링될 요소입니다.
 * @param {boolean} [props.isOpen=false] - 모달 창의 열림 상태를 나타냅니다.
 * @param {boolean} [props.disableScrollLock=false] - 스크롤 잠금을 비활성화할지 여부를 나타냅니다.
 * @param {boolean} [props.hideBackdrop=false] - 배경을 숨길지 여부를 나타냅니다.
 * @param {MouseEventHandler<HTMLDivElement>} [props.onBackdropClick] - 배경 클릭 시 호출되는 함수입니다.
 * @param {KeyboardEventHandler<HTMLDivElement>} [props.onKeyDown] - 모달 창에서 키보드 이벤트 처리 함수입니다.
 * 
 * @returns {JSX.Element | null} 모달 창의 기본 레이아웃을 렌더링하는 컴포넌트입니다. `isOpen`이 `false`인 경우 `null`을 반환합니다.
 */
export const Template = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: TemplateProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx("container", { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
