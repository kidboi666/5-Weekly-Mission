import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { ReactNode, useCallback, useMemo, useRef } from "react";
import { Portal } from "@/common/ui-portal";
import { useBackgroundClick } from "@/common/util/useBackgroundClick";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  isOpen: Boolean;
  anchorRef: React.RefObject<HTMLElement>;
  anchorPosition: { [position: string]: number };
  disableCloseWithBackgroundClick: boolean;
  onBackgroundClick: () => void;
}

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: Props) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback(
    (event: MouseEvent): void => {
      const target = event.target as HTMLElement | null;
      const isPopover = popoverRef.current?.contains(target);
      const isAnchor = anchorRef.current?.contains(target);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current}>
      <div
        className={cx("popover")}
        style={{ ...positionStyle }}
        ref={popoverRef}
      >
        {children}
      </div>
    </Portal>
  );
};
