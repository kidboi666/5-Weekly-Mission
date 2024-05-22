import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ProfileProps = {
  profile: {
    imageSource: string;
    email: string;
  };
};

/**
 * Profile 컴포넌트는 사용자의 프로필 이미지를 표시하고, 이메일 주소를 렌더링합니다.
 *
 * @component
 * @example
 * const profile = { imageSource: "profile.jpg", email: "user@example.com" };
 * 
 * return (
 *   <Profile profile={profile} />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {Object} props.profile - 사용자의 프로필 정보입니다.
 * @param {string} props.profile.imageSource - 프로필 이미지의 소스 URL입니다.
 * @param {string} props.profile.email - 사용자의 이메일 주소입니다.
 * 
 * @returns {JSX.Element} 사용자의 프로필 이미지와 이메일 주소를 렌더링하는 컴포넌트입니다.
 */
export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={cx("container")}>
      <img className={cx("image")} src={profile.imageSource} alt="프로필 이미지" />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
