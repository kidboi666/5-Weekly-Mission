import Link from "next/link";
import { DEFAULT_IMAGE } from "./constant";
import styles from "./CardContainer.module.css";
import { CardProps } from "@/types/card.interface";

export const CardContainer = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  isEdit,
}: CardProps) => {
  const imgSrc = imageSource || DEFAULT_IMAGE;

  return (
    <div className={styles.wrapCard}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.wrapCardImage}>
          {isEdit && (
            <>
              <button className={styles.favoritCardButton}>
                <img src="images/icon/star.svg" alt="즐겨찾기" />
              </button>
              <button className={styles.kebabButton}>
                <img src="images/icon/kebab.svg" alt="더보기" />
              </button>
            </>
          )}
          <img src={imgSrc} className={styles.cardImage} alt={alt} />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.cardContentElapsedTime}>{elapsedTime}</span>
          <p className={styles.cardContentDescription}>{description}</p>
          <span className={styles.cardContentCreatedAt}>{createdAt}</span>
        </div>
      </Link>
    </div>
  );
};
