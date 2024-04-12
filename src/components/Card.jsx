import "./Card.css";

const displayCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  const now = Date.now();
  const milliSeconds = now - date;

  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;

  if (seconds < 60) {
    return "방금 전";
  } else if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  } else if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  } else if (days < 30) {
    return `${Math.floor(days)}일 전`;
  } else if (months < 12) {
    return `${Math.floor(months)}달 전`;
  } else {
    return `${Math.floor(years)}년 전`;
  }
};

const Card = ({ data }) => {
  const { createdAt, description, imageSource, url } = data;
  if (!data) return;

  let time = displayCreatedAt(createdAt);

  return (
    <div className='Card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='card-image'>
          <img src={imageSource} alt='imageSource' />
        </div>
        <div className='description'>
          <span>{time}</span>
          <p>{description}</p>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
      </a>
    </div>
  );
};

export default Card;
