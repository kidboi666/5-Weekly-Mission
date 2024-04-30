import classNames from "classnames";
import styles from "./Popover.module.scss";
import { Portal } from "sharing/ui-portal/Portal";

const cx = classNames.bind(styles);

export const Popover = ({ children, isOpen, anchorRef }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current}>
      <div className={cx("popover")}>{children}</div>
    </Portal>
  );
};
