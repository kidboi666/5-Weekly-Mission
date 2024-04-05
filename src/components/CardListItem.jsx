import "./CardListItem.css";
import NonBgImg from "../assets/noBackgroundImage.png";
import { Link } from "react-router-dom";
import { formatDate, calculatePostTimeElapsed } from "./PostDateUtility";

function CardListItem({ link }) {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="CardListItem">
        <div className="CardListItem__imageWrap">
          <img
            className="CardListItem__previewImg"
            src={imageSource ? imageSource : NonBgImg}
            alt={title}
          />
        </div>
        <div className="CardListItem__content">
          <div className="CardListItem__postTime">
            {calculatePostTimeElapsed(createdAt)}
          </div>
          <div className="CardListItem__description">
            {title}
            <br />
            {description}
          </div>
          <div className="CardListItem__postDate">{formatDate(createdAt)}</div>
        </div>
      </div>
    </Link>
  );
}

export default CardListItem;
