import styles from "./FavoriteLinkCard.module.css";
import errorImage from "../assets/error.png";

function FavoriteLinkCard({ link }) {
  const { url, createdAt, description, imageSource } = link;

  const nowDate = new Date();
  const createDate = new Date(createdAt);
  const diff = nowDate - createDate; // 밀리초 기준 차이

  function displayCreatedTime() {
    const yearDiff = nowDate.getFullYear() - createDate.getFullYear();
    let monthDiff =
      yearDiff * 12 + (nowDate.getMonth() - createDate.getMonth());
    if (nowDate.getDate() < createDate.getDate()) {
      monthDiff -= 1;
    }
    const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hourDiff = Math.floor(diff / (1000 * 60 * 60));
    const minuteDiff = Math.floor(diff / (1000 * 60));

    if (yearDiff !== 0 && monthDiff >= 12) return `${yearDiff}년 전`;
    if (monthDiff !== 0 && dayDiff >= 30) return `${monthDiff}개월 전`;
    if (dayDiff !== 0 && hourDiff >= 24) return `${dayDiff}일 전`;
    if (hourDiff !== 0 && minuteDiff >= 60) return `${hourDiff}시간 전`;
    if (minuteDiff !== 0) return `${minuteDiff}분 전`;

    return `방금 전`;
  }

  function formatDateString() {
    const year = createDate.getFullYear();
    const month = String(createDate.getMonth() + 1).padStart(2, "0");
    const day = String(createDate.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${day}`;
  }

  const createdTime = displayCreatedTime();
  const createdAtFormat = formatDateString();

  const src = imageSource || errorImage;

  return (
    <div className={styles.container}>
      <a
        className={styles.linkImageAnchor}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.linkImage} src={src} alt="cardImage" />
      </a>
      <div className={styles.linkInfo}>
        <div className={styles.linkInfoContent}>{createdTime}</div>
        <div className={styles.linkInfoContent}>{description}</div>
        <div className={styles.linkInfoContent}>{createdAtFormat}</div>
      </div>
    </div>
  );
}

export default FavoriteLinkCard;
