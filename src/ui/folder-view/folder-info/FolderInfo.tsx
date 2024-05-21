import styles from "./FolderInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderInfoProps = {
  profileImage: string;
  ownerName: string;
  folderName: string;
};

/**
 * FolderInfo 컴포넌트는 폴더의 소유자 정보를 표시하고, 폴더 이름을 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <FolderInfo
 *     profileImage="profile.jpg"
 *     ownerName="홍길동"
 *     folderName="내 폴더"
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.profileImage - 폴더 소유자의 프로필 이미지 URL입니다.
 * @param {string} props.ownerName - 폴더 소유자의 이름입니다.
 * @param {string} props.folderName - 폴더의 이름입니다.
 * 
 * @returns {JSX.Element} 폴더 소유자의 프로필 이미지와 이름, 폴더 이름을 렌더링하는 컴포넌트입니다.
 */
export const FolderInfo = ({ profileImage, ownerName, folderName }: FolderInfoProps) => {
  return (
    <div className={cx("container")}>
      <img className={cx("profile")} src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder")}>{folderName}</h2>
    </div>
  );
};
