import React from "react";
import "./Card.css";
import noImage from "../assets/no-image.png";

export default function Card({ item }) {
  const { createdAt, url, title, imageSource } = item;

  const dateToString = `${createdAt.slice(0, 4)}. ${
    createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7)
  }. ${createdAt.slice(8, 10)}`;

  function timeForToday(time) {
    const today = new Date();
    const timeValue = new Date(time);

    const minutes = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (minutes < 2) return "1 minute ago";
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (minutes < 2) return "1 hour ago";
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `1 day ago`;

    const months = Math.floor(days / 30);
    if (months < 1) return `1 month ago`;
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);
    if (years < 1) return "1 year ago";

    return `${years} years ago`;
  }

  const betweenDate = timeForToday(createdAt);

  return (
    <li className='shared-card'>
      <a href={url}>
        <img src={imageSource ? imageSource : noImage} alt={title} />
        <div className='shared-card__text'>
          <p className='shared-card__ago'>{betweenDate}</p>
          <h2 className='shared-card__title'>{title}</h2>
          <p className='shared-card__date'>{dateToString}</p>
        </div>
      </a>
    </li>
  );
}
