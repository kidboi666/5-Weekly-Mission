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

function CardListItem({ item }) {
  const creatTime = item.createdAt ? item.createdAt : "error";
  const creatDate = new Date(creatTime);
  const year = creatDate.getFullYear();
  const month = creatDate.getMonth() + 1;
  const day = creatDate.getDate();

  return (
    <Link to={item.url ? item.url : '/'} className="CardLink">
      <div className="CardListItem">
        <div className="CardListItem__imgs">
          {item.imageSource ? (
            <img
              src={item.imageSource}
              alt={item.title}
              className="CardListItem__img"
            />
          ) : (
            <img src={NoImgae} alt={item.title} className="CardListItem__img" />
          )}
        </div>
        <div className="CardInfo">
          <p className="CardInfo__time">{getElapsedTime(item.createrAt)}</p>
          <h1 className="CardInfo__title">{item.description}</h1>
          <p className="CardInfo__date">
            {year}. {month}. {day}
          </p>
        </div>
      </div>
    </Link>
  );
}

function CardList() {
  const CardListItems = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <div className="cardList">
      {CardListItems?.folder?.links.map((link) => {
        return <CardListItem key={link.id} item={link} />;
      })}
    </div>
  );
}

export default CardList;
