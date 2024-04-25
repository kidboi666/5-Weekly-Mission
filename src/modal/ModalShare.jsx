import './modalShare.css';
import closeIcon from '../assets/_close.svg';
import kakaoIcon from '../assets/Chat.svg';
import facebookIcon from '../assets/Telegram.svg';
import copylinkIcon from '../assets/More.svg';

export default function ModalShare({
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

          <div className="share__container">
            <img src={kakaoIcon} alt="카카오톡 공유" />
            <img src={facebookIcon} alt="페이스북 공유" />
            <img src={copylinkIcon} alt="링크 공유" />
          </div>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
