import styles from "./folderpluslink.module.css";
import linkImg from '../assets/link.svg';

function FolderPlusLink() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBar}>
        <input className={styles.container__input} placeholder="링크를 추가해 보세요."></input>
        <img src={linkImg} alt="Link 이미지" className={styles.linkImg}/>
        <button className={styles.addLinkButton}>추가하기</button>
      </div>
    </div>
  );
}

export default FolderPlusLink;
