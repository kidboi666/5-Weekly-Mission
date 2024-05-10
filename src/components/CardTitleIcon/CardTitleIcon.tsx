import shareIcon from "../../assets/svg/share.svg";
import penIcon from "../../assets/svg/pen.svg";
import deleteIcon from "../../assets/svg/delete.svg";

import styles from "@/src/components/CardTitleIcon/CardTitleIcon.module.css";

import ModalContext from "../Modal/ModalContext";
import { useContext } from "react";
import Image from "next/image";

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
    <ul className={styles.cardTitleUl}>
      {cardTitleIcon.map(({ url, text, onClick }) => {
        return (
          <li key={text}>
            <button onClick={onClick}>
              <Image src={url} alt="" />
              <span>{text}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CardTitleIcon;
