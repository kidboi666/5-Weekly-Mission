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
      className='link-card'
      href={url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className='thumbnail-container'>
        <img className='thumbnail' src={thumbnailURL} alt='Link Thumbnail' />
      </div>
      <div className='link-card-info'>
        <div className='link-card-title-bar'>
          <span className='link-card-title'>{formatTitle(title)}</span>
          <span className='timestamp'>{timestamp}</span>
        </div>
        <p className='link-card-description'>{description}</p>
        <span className='link-card-date-created'>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}

function getTimeDifference(createdDate) {
  const currentDate = new Date();
  const timeDifference = currentDate - createdDate;

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(months / 12);

  if (minutes < 2) return '1 minute ago';

  if (minutes <= 59) return `${minutes} minutes ago`;

  if (hours < 2) return '1 hour ago';

  if (hours < 24) return `${hours} hours ago`;

  if (days < 2) return '1 day ago';

  if (days <= 30) return `${days} days ago`;

  if (months < 2) return '1 month ago';

  if (months < 12) return `${months} months ago`;

  if (years < 2) return '1 year ago';

  return `${years} years ago`;
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
