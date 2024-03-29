import "./CardList.css";
import noImageBackground from "../assets/card_no_image_background.svg";

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
  if (date < HOUR) {
    const d = parseInt(date / MINUTE);
    if (d < 2) return "1 minutes ago";
    return `${d} minutes ago`;
  } else if (date < DAY) {
    const d = parseInt(date / HOUR);
    if (d === 1) return "1 hour ago";
    return `${d} hours ago`;
  } else if (date < MONTH) {
    const d = parseInt(date / DAY);
    if (d === 1) return "1 day ago";
    return `${d} days ago`;
  } else if (date < YEAR) {
    const d = parseInt(date / MONTH);
    if (d === 1) return "1 month ago";
    return `${d} months ago`;
  } else {
    const d = parseInt(date / YEAR);
    if (d === 1) return "1 year ago";
    return `${d} years ago`;
  }
}

function Card({ link }) {
  const imgUrl = link.imageSource ?? noImageBackground;

  const handleClick = () => {
    window.open(link.url, "_blank", "noopener, noreferrer");
  };

  return (
    <button className="card" onClick={handleClick}>
      <div className="image-wrapper">
        <img src={imgUrl} alt={link.title} />
      </div>
      <div className="linkInfo">
        <p className="times">{calculateTime(link.createdAt)}</p>
        <p className="paragraph">{link.description}</p>
        <p className="createdAt">{formatDate(link.createdAt)}</p>
      </div>
    </button>
  );
}

function CardList({ links }) {
  return (
    <ul className="cardList">
      {Object.values(links).map((link) => {
        return (
          <li key={link.id}>
            <Card link={link} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
