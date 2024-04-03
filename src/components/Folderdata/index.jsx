import { useFetch } from "../../utils/hooks/useFetch";
import styles from "./index.module.css";
import addLinkIcon from "../../assets/link.svg";
import linkstyles from "./addlink.module.css";
import styled from "styled-components";

function FolderData() {
  const folderData = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/folderrr"
  );

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
      {folderData ? (
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
      ) : (
        <div className={linkstyles.addLinkBar}>
          <input
            type="search"
            className={linkstyles.addLinkInput}
            placeholder="링크를 추가해 보세요."
          />
          <img
            src={addLinkIcon}
            className={linkstyles.addLinkIcon}
            alt="링크 추가 아이콘"
          />
          <button className={linkstyles.addLinkButton}> 추가하기 </button>
        </div>
      )}
    </Container>
  );
}

export default FolderData;
