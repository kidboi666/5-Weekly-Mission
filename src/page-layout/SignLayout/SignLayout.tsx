import { ReactNode } from "react";
import styles from "./SignLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type SignLayoutProps = {
  header: ReactNode;
  form: ReactNode;
  oauth: ReactNode;
};

export const SignLayout = ({ header, form, oauth }: SignLayoutProps) => {
  return (
    <div className={cx("container")}>
      <div className={cx("items")}>
        {header}
        {form}
        {oauth}
      </div>
    </div>
  );
};
