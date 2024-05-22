import { useFetch } from '@/hooks/useFetch';
import styles from './index.module.css';
import Image from 'next/image';

// Folder 데이터의 타입 정의
interface Owner {
  profileImageSource: string;
  name: string;
}

interface Folder {
  owner: Owner;
  name: string;
}

interface FolderDataResponse {
  folder: Folder;
}

const BASE_URL_FOLDER = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function FolderData() {
  const folderData = useFetch<FolderDataResponse>(BASE_URL_FOLDER);

  return (
    <div className={styles.container}>
      {folderData && (
        <div className={styles.folderInfo}>
          <Image
            width="60"
            height="60"
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
