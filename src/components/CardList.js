import styles from "./CardList.module.css";
import NonBgImg from "../assets/이미지 없을 때 배경.png";
import { formatDate, calculatePostTimeElapsed } from "./PostDateUtility";

function CardListItem({ link }) {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <a href={url}>
      <div className={styles.CardListItem}>
        <img
          className={styles.CardListItem__previewImg}
          src={imageSource ? imageSource : NonBgImg}
        />
        <div className={styles.CardListItem__content}>
          <div>{calculatePostTimeElapsed(createdAt)}</div>
          <div className={styles.CardListItem__description}>
            {title}
            <br />
            {description}
          </div>
          <div>{formatDate(createdAt)}</div>
        </div>
      </div>
    </a>
  );
}

function CardList({ links }) {
  return (
    <ul className={styles.CardLinkList}>
      {links.map((link) => (
        <li key={link.id}>
          <CardListItem link={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
