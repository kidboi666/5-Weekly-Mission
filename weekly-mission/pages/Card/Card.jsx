import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import noImage from "../../public/images/noimage.svg";
import starbutton from "../../public/images/star.svg";
import kebab from "../../public/images/kebab.svg";
import { generateTimeText, formatDate } from "../../utils/Function";
import Popover from "../Popover/Popover";
import styles from "./Card.module.css";

const Card = ({ link, isFolderPage }) => {
  const { url, title, description } = link;
  const createdAt = link.createdAt || link.created_at;
  const imageSource = link.imageSource || link.image_source;

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleTogglePopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className={styles.card_container}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.card_image}
          src={imageSource || noImage}
          alt={title || "No Image"}
        />
      </Link>
      <Image className={styles.starbutton} src={starbutton} alt="즐겨찾기" />
      <div className={styles.card_text}>
        <p className={styles.card_time}>{generateTimeText(createdAt)}</p>
        {isFolderPage && (
          <Image
            className={styles.kababbutton}
            src={kebab}
            alt="더보기"
            onClick={handleTogglePopover}
          />
        )}

        {isPopoverOpen && (
          <div className={styles.popover_content}>
            <Popover />
          </div>
        )}

        <div className={styles.card_description}>
          <p>{description}</p>
        </div>
        <div className={styles.card_date}>
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
