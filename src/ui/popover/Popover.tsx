import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { CSSProperties, useCallback, useMemo, useRef } from "react";
import { Portal } from "@/src/ui";
import { useBackgroundClick } from "@/src/util";

const cx = classNames.bind(styles);

type PopoverProps = {
  children: React.ReactNode;
  isOpen: boolean;
  anchorRef?: React.MutableRefObject<Element | null>;
  anchorPosition?: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
};

/**
 * Popover 컴포넌트는 지정된 위치에 팝업 요소를 렌더링합니다.
 *
 * @component
 * @example
 * const anchorRef = useRef(null);
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * return (
 *   <div ref={anchorRef}>
 *     <button onClick={() => setIsOpen(!isOpen)}>Toggle Popover</button>
 *     <Popover
 *       isOpen={isOpen}
 *       anchorRef={anchorRef}
 *       anchorPosition={{ top: "10px", left: "10px" }}
 *       onBackgroundClick={() => setIsOpen(false)}
 *     >
 *       <div>Popover Content</div>
 *     </Popover>
 *   </div>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {React.ReactNode} props.children - 팝오버 내부에 렌더링될 요소입니다.
 * @param {boolean} props.isOpen - 팝오버의 열림 상태를 나타냅니다.
 * @param {React.MutableRefObject<Element | null>} [props.anchorRef] - 팝오버가 위치할 기준 앵커 요소의 참조입니다.
 * @param {Object} [props.anchorPosition] - 팝오버의 위치를 설정하는 객체입니다.
 * @param {CSSProperties["top"]} [props.anchorPosition.top] - 팝오버의 상단 위치입니다.
 * @param {CSSProperties["right"]} [props.anchorPosition.right] - 팝오버의 오른쪽 위치입니다.
 * @param {CSSProperties["bottom"]} [props.anchorPosition.bottom] - 팝오버의 하단 위치입니다.
 * @param {CSSProperties["left"]} [props.anchorPosition.left] - 팝오버의 왼쪽 위치입니다.
 * @param {boolean} [props.disableCloseWithBackgroundClick=false] - 배경 클릭 시 팝오버를 닫지 않을지 여부를 나타냅니다.
 * @param {() => void} props.onBackgroundClick - 배경 클릭 시 호출되는 함수입니다.
 * 
 * @returns {JSX.Element | null} 지정된 위치에 팝업 요소를 렌더링하는 컴포넌트입니다. `isOpen`이 `false`인 경우 `null`을 반환합니다.
 */
export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback<(event: MouseEvent) => void>(
    ({ target }) => {
      const isPopover = popoverRef.current?.contains(target as Node);
      const isAnchor = anchorRef?.current?.contains(target as Node);
      if (!isPopover && !isAnchor && !disableCloseWithBackgroundClick && isOpen) {
        onBackgroundClick();
      }
    },
    [popoverRef, anchorRef, disableCloseWithBackgroundClick, isOpen, onBackgroundClick]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef?.current}>
      <div className={cx("popover")} ref={popoverRef} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
