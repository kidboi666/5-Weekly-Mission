import moment from "moment";
import { useFetch } from "../../hooks/useFetch";
import "./Main.css";
import blankImage from "../../images/blankImage.svg";

function Card() {
  const CardLink = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");

  const FormatDate = (dateString) => {
    const date = moment(dateString);
    return date.format("YYYY.MM.DD");
  };

  const TimeDiff = (createdAt) => {
    const timeDiffrence = moment().diff(moment(createdAt), "minutes");

    if (timeDiffrence < 2) {
      return "1 minute ago";
    }
    if (timeDiffrence < 59) {
      return `${timeDiffrence} minutes ago`;
    }
    if (timeDiffrence < 60 * 24) {
      const hours = Math.floor(timeDiffrence / 60);
      return hours === 1 ? "1hour ago" : `${hours} hours ago`;
    }
    if (timeDiffrence < 60 * 24 * 30) {
      const days = Math.floor(timeDiffrence / (60 * 24));
      return days === 1 ? "1day ago" : `${days}days ago`;
    }
    if (timeDiffrence < 60 * 24 * 30 * 31) {
      const months = Math.floor(timeDiffrence / (60 * 24 * 30));
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    if (timeDiffrence > 60 * 24 * 30 * 31) {
      const years = Math.floor(timeDiffrence / (60 * 24 * 30));
      return years === 1 ? "1year ago" : `${years} years ago`;
    }
  };

  return (
    <div className="body">
      <div className=""></div>
      <div className="cardContainer">
        {CardLink &&
          CardLink.folder.links.map((links) => (
            <div key={links.id} className="cards">
              <div>
                {links.imageSource ? (
                  <img
                    className="cardImage"
                    src={links.imageSource}
                    alt={links.title}
                  />
                ) : (
                  <img
                    className="cardImage"
                    src={blankImage}
                    alt="blankImage"
                  />
                )}
              </div>
              <div className="cardTxt">
                <p className="timeDiff">{TimeDiff(links.createdAt)}</p>
                <p className="cardDescription">{links.description}</p>
                <p className="cardCreate">{FormatDate(links.createdAt)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
