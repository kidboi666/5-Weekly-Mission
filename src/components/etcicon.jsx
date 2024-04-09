import ShareImg from "../assets/share.svg";
import PenImg from "../assets/pen.svg";
import DeleteImg from "../assets/delete.svg";
import styles from './etcicon.module.css';
function EtcIcon() {
  return (
    <div className = {styles.container}>
      <button className={styles.set}>
        <img src={ShareImg} alt="공유를 나타내는 이미지" />
        <span>공유</span>
      </button>
      <button className={styles.set}>
        <img src={PenImg} alt="수정을 나타내는 이미지" />
        <span>이름 변경</span>
      </button>
      <button className={styles.set}>
        <img src={DeleteImg} alt="삭제를 나타내는 이미지" />
        <span>삭제</span>
      </button>
    </div>
  );
}

export default EtcIcon;