import React from "react";
import "./CardTitleIcon.css";
import shareIcon from "../../assets/svg/share.svg";
import penIcon from "../../assets/svg/pen.svg";
import deleteIcon from "../../assets/svg/delete.svg";

import ModalContext from "../Modal/ModalContext";
import { useContext } from "react";

function CardTitleIcon() {
  const { setModalType, openModal } = useContext(ModalContext)!;

  const cardTitleIcon = [
    {
      url: shareIcon,
      text: "공유",
      onClick: () => {
        setModalType("share");
        openModal();
      },
    },
    {
      url: penIcon,
      text: "이름 변경",
      onClick: () => {
        setModalType("edit");
        openModal();
      },
    },
    {
      url: deleteIcon,
      text: "삭제",
      onClick: () => {
        setModalType("folderDelete");
        openModal();
      },
    },
  ];

  return (
    <ul>
      {cardTitleIcon.map(({ url, text, onClick }) => {
        return (
          <li key={text}>
            <button onClick={onClick}>
              <img src={url} alt="" />
              <span>{text}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CardTitleIcon;
