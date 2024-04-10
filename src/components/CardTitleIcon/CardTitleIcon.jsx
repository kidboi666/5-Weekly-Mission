import "./CardTitleIcon.css";
import shareIcon from "../../assets/svg/share.svg";
import penIcon from "../../assets/svg/pen.svg";
import deleteIcon from "../../assets/svg/delete.svg";

const cardTitleIcon = [
    {
        url: shareIcon,
        text: "공유",
    },
    {
        url: penIcon,
        text: "이름 변경",
    },
    {
        url: deleteIcon,
        text: "삭제",
    },
];

function CardTitleIcon() {
    return (
        <ul>
            {cardTitleIcon.map(({ url, text }) => {
                return (
                    <li key={text}>
                        <button>
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
