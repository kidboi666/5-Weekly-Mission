import "./KebabMenu.css";
import KebabImg from "../assets/kebab.svg";
function KebabMenu() {
  return (
    <div className="KebabMenu">
      <button className="KebabMenu__btn">
        <img className="KebabMenu__img" src={KebabImg} alt="케밥버튼" />
      </button>
    </div>
  );
}

export default KebabMenu;
