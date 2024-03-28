import React from "react";

export default function Card({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  console.log(item);
  return (
    <div>
      <img src={imageSource} alt={title} />
      <p>10분 전</p>
      <h2>{title}</h2>
      <p>{createdAt}</p>
    </div>
  );
}
