import "./Card.css";
import catImg from "../../assets/images/cat.jpg";
import GetDate from "../../utils/GetDate";
import GetDaysAgo from "../../utils/GetDaysAgo";
import useToggle from "../../hooks/useToggle";
import KebobList from "./KebobList";

import EditableStarButton from "./EditableStarButton";
import KebobButton from "./KebobButton";

function Card({ card }) {
  const { description, id, title, url, imageSource, createdAt } = card;
  const [display, setDisplay] = useToggle();
  const onClickKebobButton = (e) => {
    e.preventDefault();
    setDisplay();
  };

  return (
    <li key={id}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="img-box">
          {imageSource ? (
            <img src={imageSource} alt={title} />
          ) : (
            <img src={catImg} alt="이미지가 없습니다." />
          )}
          {card.createdAt ? <EditableStarButton /> : null}
        </div>
        <div className="text-box">
          <div className="text-menu-wrap">
            <div className="time">
              <GetDaysAgo createdAt={createdAt} />
            </div>
            {card.createdAt ? (
              <>
                <KebobButton onClickKebobButton={onClickKebobButton} />
                {display === true ? <KebobList /> : null}
              </>
            ) : null}
          </div>
          <p>{description}</p>
          <div className="date">
            <GetDate createdAt={createdAt} />
          </div>
        </div>
      </a>
    </li>
  );
}

export default Card;
