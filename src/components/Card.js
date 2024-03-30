import React from "react";
import "./Card.css";
import noImage from "../assets/no-image.png";
import dateAgo from "../utils/dateAgo";

export default function Card({ item }) {
  const { createdAt, url, title, imageSource } = item;

  const dateToString = `${createdAt.slice(0, 4)}. ${
    createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7)
  }. ${createdAt.slice(8, 10)}`;

  const dateBetween = dateAgo(createdAt);

  return (
    <li className='shared-card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={imageSource ? imageSource : noImage} alt={title} />
        <div className='shared-card__text'>
          <p className='shared-card__ago'>{dateBetween}</p>
          <h2 className='shared-card__title'>{title}</h2>
          <p className='shared-card__date'>{dateToString}</p>
        </div>
      </a>
    </li>
  );
}
