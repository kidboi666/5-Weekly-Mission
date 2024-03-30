import "./CardList.css";
import NonBgImg from "../assets/이미지 없을 때 배경.png";
import { formatDate, calculatePostTimeElapsed } from "./PostDateUtility";

function CardListItem({ link }) {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <a href={url}>
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
    </a>
  );
}

function CardList({ links }) {
  return (
    <ul className="CardLinkList">
      {links.map((link) => (
        <li key={link.id}>
          <CardListItem link={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
