import './modalFolder.css';
import closeIcon from '../assets/_close.svg';

export default function ModalFolder({
  title,
  folderName,
  buttonName,
  onClose,
  isModalOpen,
}) {
  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">{title}</div>

          <div className="modal__content__body">
            <input placeholder="내용 입력">{folderName}</input>
          </div>
          <button className="action-button">{buttonName}</button>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
