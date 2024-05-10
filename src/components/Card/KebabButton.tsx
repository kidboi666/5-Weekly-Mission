import React from "react";
import KebabIcon from "../../assets/svg/kebab.svg";

interface OnClickKebabButton {
  onClickKebabButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function KebebButton({ onClickKebabButton }: OnClickKebabButton) {
  return (
    <button className="Kebab" onClick={onClickKebabButton}>
      <img src={KebabIcon} alt="메뉴 더보기" />
    </button>
  );
}

export default KebebButton;
