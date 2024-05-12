import useData from "@/hooks/useData";
import { getSampleUserData } from "../api/Api";
import styles from "./Header.module.css";
import Image from "next/image";

function Header() {
  const folderData = useData(getSampleUserData);
  return (
    <header className={styles.header}>
      {folderData && (
        <div className={styles.Header__profileArea}>
          <div className={styles.Header__profileArea__profileImg}>
            <Image
              src={folderData.folder.owner.profileImageSource}
              alt="프로필사진"
            />
          </div>
          <div className={styles.Header__profileArea__nickname}>
            {folderData.folder.owner.name}
          </div>
          <div className={styles.Header__profileArea__folderName}>
            {folderData.folder.name}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
