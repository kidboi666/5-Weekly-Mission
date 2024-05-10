import "./Card.css";
import React from "react";
import catImg from "../../assets/images/cat.jpg";
import GetDate from "../../utils/GetDate";
import GetDaysAgo from "../../utils/GetDaysAgo";
import useToggle from "../../hooks/useToggle";
import KebabList from "./KebabList";

import EditableStarButton from "./EditableStarButton";
import KebabButton from "./KebabButton";
import { useLocation } from "react-router-dom";

interface FolderCardData {
  card: {
    id: number;
    createdAt: string;
    description?: string;
    folderId?: number;
    title?: string;
    updatedAt?: string;
    url: string;
    imageSource?: string;
  };
}

function Card({ card }: FolderCardData) {
  const { description, id, title, url, imageSource, createdAt } = card;
  const [display, setDisplay] = useToggle();
  const location = useLocation();

  const onClickKebabButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof setDisplay === "function") setDisplay();
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
          {location.pathname === "/folder" ? <EditableStarButton /> : null}
        </div>
        <div className="text-box">
          <div className="text-menu-wrap">
            <div className="time">
              <GetDaysAgo createdAt={createdAt} />
            </div>
            {location.pathname === "/folder" ? (
              <>
                <KebabButton onClickKebabButton={onClickKebabButton} />
                {display === true ? <KebabList url={url} setDisplay={setDisplay} /> : null}
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
