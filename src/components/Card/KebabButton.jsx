import KebabIcon from "../../assets/svg/kebab.svg";

function KebebButton({ onClickKebabButton }) {
  return (
    <button className="Kebab" onClick={onClickKebabButton}>
      <img src={KebabIcon} alt="메뉴 더보기" />
    </button>
  );
}

export default KebebButton;
