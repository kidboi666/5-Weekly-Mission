import './modalAddToFolder.css';
import closeIcon from '../assets/_close.svg';

export default function ModalAddToFolder({
  title,
  targetName,
  isModalOpen,
  onClose,
}) {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">{title}</div>

          <div className="modal__content__body">{targetName}</div>

          <div className="option__container">
            <button className="options">
              <p>코딩팁</p> <span>7개 링크</span>
            </button>
            <button className="options">
              <p>채용 사이트</p> <span>12개 링크</span>
            </button>
            <button className="options">
              <p>유용한글</p> <span>30개 링크</span>
            </button>
            <button className="options">
              <p>나만의 장소</p> <span>3개 링크</span>
            </button>
          </div>
          <button className="action-button">추가하기</button>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
