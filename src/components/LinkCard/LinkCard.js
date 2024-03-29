import './LinkCard.css';

export default function LinkCard({ linkCardInfo }) {
  const thumbnailURL = linkCardInfo.imageSource;
  const description = linkCardInfo.description;
  const title = linkCardInfo.title;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.createdAt);
  const timestamp = getTimeDifference(createdDate);
  return (
    <a
      className="link-card"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="thumbnail-container">
        <img className="thumbnail" src={thumbnailURL} alt="Link Thumbnail" />
      </div>
      <div className="link-card-info">
        <div className="link-card-title-bar">
          <span className="link-card-title">{formatTitle(title)}</span>
          <span className="timestamp">{timestamp}</span>
        </div>
        <p className="link-card-description">{description}</p>
        <span className="link-card-date-created">
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
