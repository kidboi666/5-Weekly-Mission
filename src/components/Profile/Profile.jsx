import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Profile = ({ profile }) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("profile")}
        src={profile.profileImageSource}
        alt="profile"
      />
      <div>{profile.email}</div>
    </div>
  );
};
