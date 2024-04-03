import styles from "./index.module.css";
import addLinkIcon from "../../assets/link.svg";
import styled from "styled-components";
function Addlink() {
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
      <div className={styles.addLinkBar}>
        <input
          type="search"
          className={styles.addLinkInput}
          placeholder="링크를 추가해 보세요."
        />
        <img
          src={addLinkIcon}
          className={styles.addLinkIcon}
          alt="링크 추가 아이콘"
        />
        <button className={styles.addLinkButton}> 추가하기 </button>
      </div>
    </Container>
  );
}

export default Addlink;
