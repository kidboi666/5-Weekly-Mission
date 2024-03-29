import React from "react";
import "./Card.css";

export default function Card({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  console.log(item);
  return (
    <div class='shared-card'>
      <img src={imageSource} alt={title} />
      <div className='shared-card__text'>
        <p className='shared-card__ago'>{createdAt}</p>
        <h2 className='shared-card__title'>{title}</h2>
        <p className='shared-card__date'>{createdAt}</p>
      </div>
    </div>
  );
}
