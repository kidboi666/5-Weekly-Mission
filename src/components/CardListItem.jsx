import "./CardListItem.css";
import NonBgImg from "../assets/noBackgroundImage.png";
import BookmarkIcon from "../assets/star.svg";
import { Link } from "react-router-dom";
import { formatDate, calculatePostTimeElapsed } from "../utils/PostDateUtility";
import KebabMenu from "./KebabMenu";

function CardListItem({ link }) {
  const { created_at, description, image_source, title, url } = link;

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="CardListItem">
        <div className="CardListItem__imageWrap">
          <img
            className="CardListItem__previewImg"
            src={image_source ? image_source : NonBgImg}
            alt={title}
          />
          <button disabled>
            <img
              className="CardListItem__bookmarkIcon"
              src={BookmarkIcon}
              alt="북마크아이콘"
            />
          </button>
        </div>
        <div className="CardListItem__content">
          <KebabMenu url={url} />
          <div className="CardListItem__postTime">
            {calculatePostTimeElapsed(created_at)}
          </div>
          <div className="CardListItem__description">
            {title}
            <br />
            {description}
          </div>
          <div className="CardListItem__postDate">{formatDate(created_at)}</div>
        </div>
      </div>
    </Link>
  );
}

export default CardListItem;
