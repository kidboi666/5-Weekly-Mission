import "./Modal.css";
import CloseImg from "../../assets/icon/close.png";

function Modal() {
  return (
    <div className="modal-wrap">
      <div className="modal-bg"></div>
      <div className="modal-con">
        <div className="modal-form1">
          <h2>폴더 이름 변경</h2>
          <div className="con-wrap">
            <input type="text" className="modal-input" placeholder="내용 입력" />
            <button className="btn-form01">변경하기</button>
          </div>
        </div>
        <div className="modal-exit">
          <button>
            <img src={CloseImg} alt="모달 닫기" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
