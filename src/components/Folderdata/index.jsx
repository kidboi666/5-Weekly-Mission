import { useFetch } from "../../utils/hooks/useFetch";
import styles from "./index.module.css";
import styled from "styled-components";

const BASE_URL_FOLDER = "https://bootcamp-api.codeit.kr/api/sample/folder";

function FolderData() {
  const folderData = useFetch(BASE_URL_FOLDER);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 24.4rem;
    padding: 2rem 0 6rem;
    background-color: var(--light-blue);
  `;

  return (
    <Container>
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
    </Container>
  );
}

export default FolderData;
