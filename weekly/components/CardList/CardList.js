import styles from '@/styles/CardList.module.css';
import styled from 'styled-components';
import noImageBackground from '../../assets/card_no_image_background.svg';
import starIcon from '../../assets/star.svg';
import kebabIcon from '../../assets/kebab.svg';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function calculateTime(value) {
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 31 * DAY;
  const YEAR = 12 * MONTH;

  const date = new Date() - new Date(value);
  // 한시간 이내
  const diffInMinites = parseInt(date / MINUTE);
  const diffInHours = parseInt(date / HOUR);
  if (diffInHours < 1) {
    if (diffInMinites === 1) {
      return '1 minutes ago';
    }
    return `${diffInMinites} minutes ago`;
  }

  //  하루 이내
  const diffInDays = parseInt(date / DAY);
  if (diffInDays < 1) {
    if (diffInHours === 1) {
      return '1 hour ago';
    }
    return `${diffInHours} hours ago`;
  }

  // 한 달 이내
  const diffInMonths = parseInt(date / MONTH);
  if (diffInMonths < 1) {
    if (diffInDays === 1) {
      return '1 day ago';
    }
    return `${diffInDays} days ago`;
  }

  // 1년 이내
  const diffinYears = parseInt(date / YEAR);
  if (diffinYears < 1) {
    if (diffInMonths === 1) {
      return '1 month ago';
    }
    return `${diffInMonths} months ago`;
  }

  // 1년 이상
  if (diffinYears === 1) {
    return '1 year ago';
  }
  return `${diffinYears} years ago`;
}

const LinkImage = styled.div`
  background-image: url(${(props) => props.$img});
  position: relative;
  display: block;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;
`;

const Icon = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  right: 15px;
  top: ${(props) => props.$top}px;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.$img});
  cursor: pointer;
`;

function Card({ link, isFolderPage = false }) {
  const imgUrl = (link.imageSource || link.image_source) ?? noImageBackground;

  const handleClick = () => {
    window.open(link.url, '_blank', 'noopener, noreferrer');
  };

  return (
    <button className={styles.card} onClick={handleClick}>
      <LinkImage className={styles.image - wrapper} $img={imgUrl}></LinkImage>
      <div className={styles.linkInfo}>
        <p className={styles.times}>{calculateTime(link.createdAt || link.created_at)}</p>
        <p className={styles.paragraph}>{link.description}</p>
        <p className={styles.createdAt}>{formatDate(link.createdAt || link.created_at)}</p>
      </div>
      {isFolderPage ? <Icon width="34" height="34" $top="15" $img={starIcon} /> : null}
      {isFolderPage ? <Icon width="21" height="17" $top="215" $img={kebabIcon} /> : null}
    </button>
  );
}

function CardList({ links, isFolderPage = false }) {
  if (!links) return;
  return (
    <ul className={styles.cardList}>
      {Object.values(links).map((link) => {
        return (
          <li key={link.id}>
            <Card link={link} isFolderPage={isFolderPage} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
