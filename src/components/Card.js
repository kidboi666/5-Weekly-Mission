import React from "react";
import "./Card.css";
import noImage from "../assets/no-image.png";
import { dateAgo, dateToString } from "../utils/date";

export default function Card({ item }) {
  const { createdAt, url, title, imageSource } = item;

  const dateBetween = dateAgo(createdAt);
  const date = dateToString(createdAt);

  return (
    <li className='shared-card'>
      <a href={url} target='_blank' rel='noreferrer'>
        <img
          className='shared-card__thumbnail'
          src={imageSource ? imageSource : noImage}
          alt={title}
        />
        <div className='shared-card__text'>
          <p className='shared-card__ago'>{dateBetween}</p>
          <h2 className='shared-card__title'>{title}</h2>
          <p className='shared-card__date'>{date}</p>
        </div>
      </a>
    </li>
  );
}
