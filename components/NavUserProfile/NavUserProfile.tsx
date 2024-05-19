import styles from "./NavUserProfile.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { User } from "components/type";

const cx = classNames.bind(styles);

export const NavUserProfile = ({ name, profile, email }: User) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("image")}
        src={profile}
        alt={name}
        width={100} 
        height={100}
      />
      <p>{email}</p>
    </div>
  );
};
