import "./CardList.css";
import noImageBackground from "../../assets/card_no_image_background.svg";

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
      return "1 minutes ago";
    }
    return `${diffInMinites} minutes ago`;
  }

  //  하루 이내
  const diffInDays = parseInt(date / DAY);
  if (diffInDays < 1) {
    if (diffInHours === 1) {
      return "1 hour ago";
    }
    return `${diffInHours} hours ago`;
  }

  // 한 달 이내
  const diffInMonths = parseInt(date / MONTH);
  if (diffInMonths < 1) {
    if (diffInDays === 1) {
      return "1 day ago";
    }
    return `${diffInDays} days ago`;
  }

  // 1년 이내
  const diffinYears = parseInt(date / YEAR);
  if (diffinYears < 1) {
    if (diffInMonths === 1) {
      return "1 month ago";
    }
    return `${diffInMonths} months ago`;
  }

  // 1년 이상
  if (diffinYears === 1) {
    return "1 year ago";
  }
  return `${diffinYears} years ago`;
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
  if (!links) return;
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
