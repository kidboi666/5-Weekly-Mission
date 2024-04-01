import { useFetch } from "../hooks/useFetch";
import styles from "./index.module.css";

function FolderData() {
  const folderData = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <div className={styles.folderInfoContainer}>
      {folderData && (
        <div className={styles.folderInfo}>
          <img
            src={folderData.folder.owner.profileImageSource}
            className={styles.folderProfile}
            alt="프로필"
          />
          <span className={styles.ownerName}>
            {folderData.folder.owner.name}
          </span>
          <h1 className={styles.folderName}>{folderData.folder.name}</h1>
        </div>
      )}
    </div>
  );
}

export default FolderData;
