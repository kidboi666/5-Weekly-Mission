import facebook from '../../assets/images/facebook.svg';
import share from '../../assets/images/link.svg';
import kakao from '../../assets/images/kakao.svg';
import styles from './ModalContents.module.css';

const SHARE_BUTTONS_INFO = [
  { text: '카카오톡', icon: kakao },
  { text: '페이스북', icon: facebook },
  { text: '링크 복사', icon: share },
];

export default function ShareModal({ headerText, subHeaderText }) {
  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <ul className={styles.shareButtonBar}>
        {SHARE_BUTTONS_INFO.map((item) => (
          <li key={item.index}>
            <div className={styles.shareButtonWrapper}>
              <button className={styles.shareButton}>
                <img src={item.icon} alt={item.text} />
              </button>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
