import "./card.css";

const Card = ({ date, title, url, img }) => {

  function displayedAt(date) {
    const milliSeconds = new Date() - new Date(date);
    const seconds = milliSeconds / 1000;
    if (seconds < 120) return `1 minute ago`;
    const minutes = seconds / 60;
    if (minutes <= 59) return `${Math.floor(minutes)} minutes ago`;
    if (minutes < 60) return `1 hour ago`;
    const hours = minutes / 60;
    if (hours <= 23) return `${Math.floor(hours)} hours ago`;
    if (hours < 24) return `1 day ago`;
    const days = hours / 24;
    if (days <= 30) return `${Math.floor(days)} days ago`;
    if (days < 31) return `1 month ago`;
    const months = days / 30;
    if (months <= 11) return `${Math.floor(months)} months ago`;
    if (months < 12) return `1 year ago`;
    const years = days / 365;
    return `${Math.floor(years)} years ago`;
  }

  return (
    <>
      <a href={url} className="card" target="_blank">
        <img src={img}></img>
        <div className={"card-text"}>
          <p>{displayedAt(date)}</p>
          <h4>{title}</h4>
          <h6>{date.slice(0, 10).replaceAll("-", ".")}</h6>
        </div>
      </a>
    </>
  );
};

export default Card;
