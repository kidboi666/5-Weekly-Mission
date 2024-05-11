import styles from "./CardListItem.module.css";
import NonBgImg from "@/public/noBackgroundImage.png";
import BookmarkIcon from "@/public//star.svg";
import Link from "next/link";
import { formatDate, calculatePostTimeElapsed } from "@/utils/PostDateUtility";
import KebabMenu from "./KebabMenu";

interface CardListItemProps {
  link: {
    created_at: string;
    description: string;
    image_source: string;
    title: string;
    url: string;
  };
  folders: Array<{
    created_at: string;
    favorite: boolean;
    id: number;
    link: {
      count: number;
    };
    name: string;
    user_id: number;
  }>;
}

const CardListItem: React.FC<CardListItemProps> = ({ link, folders }) => {
  const { created_at, description, image_source, title, url } = link;
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.CardListItem}>
        <div className={styles.CardListItem__imageWrap}>
          <img
            className={styles.CardListItem__previewImg}
            src={image_source ? image_source : NonBgImg}
            alt={title}
          />
          <button disabled>
            <img
              className={styles.CardListItem__bookmarkIcon}
              src={BookmarkIcon}
              alt="북마크아이콘"
            />
          </button>
        </div>
        <div className={styles.CardListItem__content}>
          <KebabMenu url={url} folders={folders} />
          <div className={styles.CardListItem__postTime}>
            {calculatePostTimeElapsed(created_at)}
          </div>
          <div className={styles.CardListItem__description}>
            {title}
            <br />
            {description}
          </div>
          <div className={styles.CardListItem__postDate}>
            {formatDate(created_at)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardListItem;
