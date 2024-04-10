import starIcon from "../../assets/svg/star.svg";
import "./EditableStarButton.css";

function EditableStarButton() {
    return (
        <button className="editable-star">
            <img src={starIcon} alt="즐겨찾기" />
        </button>
    );
}

export default EditableStarButton;
