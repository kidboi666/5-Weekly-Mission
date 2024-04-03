import './LinkCard.css';
import noImagePlaceholder from '../../assets/images/placeholder_image.png';

const STYLE_LINK_CARD_CLASS_NAME = 'link-card';
const STYLE_LINK_CARD_INFO_CLASS_NAME = 'link-card-info';
const STYLE_LINK_CARD_TITLE_BAR_CLASS_NAME = 'link-card-title-bar';
const STYLE_LINK_CARD_TITLE_CLASS_NAME = 'link-card-title';
const STYLE_TIMESTAMP_CLASS_NAME = 'timestamp';
const STYLE_LINK_CARD_DESCRIPTION_CLASS_NAME = 'link-card-description';
const STYLE_LINK_CARD_CREATED_CLASS_NAME = 'link-card-created';
const STYLE_THUMBNAIL_CONTAINER_CLASS_NAME = 'thumbnail-container';
const STYLE_THUMBNAIL_CLASS_NAME = 'thumbnail';

export default function LinkCard({ linkCardInfo }) {
  const thumbnailURL = linkCardInfo.imageSource
    ? linkCardInfo.imageSource
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const title = linkCardInfo.title;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.createdAt);
  const timestamp = getTimeDifference(createdDate);
  return (
    <a
      className={STYLE_LINK_CARD_CLASS_NAME}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={STYLE_THUMBNAIL_CONTAINER_CLASS_NAME}>
        <img
          className={STYLE_THUMBNAIL_CLASS_NAME}
          src={thumbnailURL}
          alt="Link Thumbnail"
        />
      </div>
      <div className={STYLE_LINK_CARD_INFO_CLASS_NAME}>
        <div className={STYLE_LINK_CARD_TITLE_BAR_CLASS_NAME}>
          <span className={STYLE_LINK_CARD_TITLE_CLASS_NAME}>
            {formatTitle(title)}
          </span>
          <span className={STYLE_TIMESTAMP_CLASS_NAME}>{timestamp}</span>
        </div>
        <p className={STYLE_LINK_CARD_DESCRIPTION_CLASS_NAME}>{description}</p>
        <span className={STYLE_LINK_CARD_CREATED_CLASS_NAME}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}

function getTimeDifference(createdDate) {
  const currentDate = new Date();
  const timeDifference = currentDate - createdDate;
  const intervals = [
    { label: 'year', divisor: 31536000000 },
    { label: 'month', divisor: 2592000000 },
    { label: 'day', divisor: 86400000 },
    { label: 'hour', divisor: 3600000 },
    { label: 'minute', divisor: 60000 },
  ];

  for (const interval of intervals) {
    const value = Math.floor(timeDifference / interval.divisor);
    if (value >= 1) {
      return value === 1
        ? `1 ${interval.label} ago`
        : `${value} ${interval.label}s ago`;
    }
  }

  return 'just now';
}

function formatDate(date) {
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatTitle(str) {
  const delimiters = [':', '|', '–', '-'];
  let title = str;

  for (const delimiter of delimiters) {
    const index = str.indexOf(delimiter);
    if (index !== -1 && index < title.length) {
      title = str.substring(0, index);
    }
  }

  return title;
}
