import styles from "./FolderInfo.module.css";
import { FolderInfoProps } from "@/types/folder.interface";

export const FolderInfo = ({
  folderName,
  ownerName,
  profileImage,
}: FolderInfoProps) => {
  return (
    <div className={styles.wrapFolderInfo}>
      <img
        src={profileImage}
        className={styles.folderInfoProfile}
        alt="폴더 유저 프로필 이미지"
      />
      <span className={styles.folderInfoOwner}>{ownerName}</span>
      <h2 className={styles.folderInfoName}>{folderName}</h2>
    </div>
  );
};
