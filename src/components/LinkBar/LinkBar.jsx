import "../LinkBar/LinkBar.css";
import linkImg from "../../assets/link.svg";

function LinkBar() {
  return (
    <div className="link-container">
      <form className="link-form">
        <div className="link-input-wrapper">
          <img src={linkImg} alt="링크 모양 이미지" />
          <input
            className="link-input"
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <div className="link-btn-wrapper">
          <button className="link-btn" type="submit">
            추가하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinkBar;
