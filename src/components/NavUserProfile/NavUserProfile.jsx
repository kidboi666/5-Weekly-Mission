import styles from "./NavUserProfile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const NavUserProfile = ({ user }) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("image")}
        src={user.profileImageSource}
        alt={user.name}
      />

      <p>{user.email}</p>
    </div>
  );
};
