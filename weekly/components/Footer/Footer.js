import styles from '@/styles/Footer.module.css';
import SnsButton from '../Button/SnsButton';

function Footer() {
  return (
    <footer>
      <div className={styles.info}>
        <div className={styles.license}>©codeit - 2023</div>
        <div className={styles.privacy}>
          <button>Privacy Policy</button>
          <button>FAQ</button>
        </div>
        <div className={styles.sns}>
          <SnsButton $icon="facebook" />
          <SnsButton $icon="twitter" />
          <SnsButton $icon="youtube" />
          <SnsButton $icon="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
