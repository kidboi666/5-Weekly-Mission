import "./ConHeader.css";
import Avatar from "../assets/svg/Avatar.svg";

function ConHeader() {
    return (
        <div className="con-header-wrap">
            <div className="con-header">
                <img src={Avatar} alt="" />
                <h3>@코드잇</h3>
            </div>
            <h2>⭐️ 즐겨찾기</h2>
        </div>
    );
}

export default ConHeader;
