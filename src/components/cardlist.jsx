import "./cardlist.css";
import { useFetch } from "../usefetch";
import NoImgae from "../assets/NoImage.svg";
import { Link } from "react-router-dom";

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};

function CardListItem({ item, folder = false }) {

  const creatTime = item.createdAt ? item.createdAt : item.created_at;
  const creatDate = new Date(creatTime);
  const year = creatDate.getFullYear();
  const month = creatDate.getMonth() + 1;
  const day = creatDate.getDate();

  const thumbnail = item.imageSource ? item.imageSource : item.image_source;


  return (
    <Link to={item.url ? item.url : "/"} target="blank" className="CardLink">
      <p>{item.count}</p>
      <div className="CardListItem">
        <div className="CardListItem__imgs">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={item.title}
              className="CardListItem__img"
            />
          ) : (
            <img src={NoImgae} alt={item.title} className="CardListItem__img" />
          )}
        </div>
        <div className="CardInfo">
          <p className="CardInfo__time">{getElapsedTime(creatTime)}</p>
          <h1 className="CardInfo__title">{item.description}</h1>
          <p className="CardInfo__date">
            {year}. {month}. {day}
          </p>
        </div>
      </div>
    </Link>
  
  );
}

function CardList({ url }) {
  const cardListItems = useFetch(url);

  return (
    <div className="cardList">
      {cardListItems?.folder?.links.map((link) => (
        <CardListItem key={link.id} item={link} />
      ))}
      {cardListItems?.data?.length > 0 ? (
        cardListItems?.data?.map((link) => (
          <CardListItem key={link.id} item={link} folder={true} />
        ))
      ) : (
        <div className="NoDataList">저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}


export default CardList;
