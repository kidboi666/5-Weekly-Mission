import facebook from '../../assets/images/facebook.svg';
import share from '../../assets/images/link.svg';
import kakao from '../../assets/images/kakao.svg';
import styles from './ModalContents.module.css';
import { facebookShare } from '../../utils/shareFunctions/facebooShare';
import { kakaoShare } from '../../utils/shareFunctions/kakaoshare';

export default function ShareModal({ headerText, subHeaderText, folderNum }) {
  const shareUrl = `https://bk-part2.netlify.app/shared/${folderNum}`;

  const SHARE_BUTTONS_INFO = [
    { text: '카카오톡', icon: kakao, onClick: () => kakaoShare(shareUrl) },
    {
      text: '페이스북',
      icon: facebook,
      onClick: () => facebookShare(shareUrl),
    },
    { text: '링크 복사', icon: share },
  ];

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
              <button className={styles.shareButton} onClick={item.onClick}>
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
