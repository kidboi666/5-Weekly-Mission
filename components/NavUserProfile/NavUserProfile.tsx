import styles from "./NavUserProfile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface User {
  name: string;
  profile: string;
  email: string;
}

export const NavUserProfile = ({ name, profile, email }: User) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("image")}
        src={profile}
        alt={name}
      />

      <p>{email}</p>
    </div>
  );
};
