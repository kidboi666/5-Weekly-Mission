import { snsLists } from '@/constant/footer-constant';
import styles from '@/components/Footer/index.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <span className={styles.footer_codeit}>©codeit - 2024</span>
        <div className={styles.footer_center_div}>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>
        <div className={styles.footer_icon_div}>
          {snsLists.map((snsList) => (
            <a
              href={snsList.link}
              target="_blank"
              rel="noopener noreferrer"
              key={snsList.id}
            >
              <Image
                src={snsList.img}
                height={Number(snsList.height)}
                width={Number(snsList.width)}
                alt={snsList.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
