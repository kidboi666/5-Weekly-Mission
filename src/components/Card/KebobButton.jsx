import kebobIcon from "../../assets/svg/kebab.svg";

function KebobButton({ onClickKebobButton }) {
    return (
        <button className="kebob" onClick={onClickKebobButton}>
            <img src={kebobIcon} alt="메뉴 더보기" />
        </button>
    );
}

export default KebobButton;
