import styles from "./Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CtaProps = React.PropsWithChildren<{}>;

export const Cta: React.FC<CtaProps> = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};
