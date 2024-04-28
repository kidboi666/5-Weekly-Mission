// ModalShare.jsx
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
  currentFolderId,
}) {
  const handleCloseModal = () => {
    onClose(false);
  };

  const handleKakaoShare = () => {
    window.open(
      `https://www.kakaotalk.com?shared/${currentFolderId}`,
      '_blank'
    );
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com?shared/${currentFolderId}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/shared/${currentFolderId}`
    );
    alert('링크가 복사되었습니다.');
  };

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content">
          <div className="modal__content__header">{title}</div>

          <div className="modal__content__body">{targetName}</div>

          <div className="share__container">
            <img
              src={kakaoIcon}
              alt="카카오톡 공유"
              onClick={handleKakaoShare}
            />
            <img
              src={facebookIcon}
              alt="페이스북 공유"
              onClick={handleFacebookShare}
            />
            <img src={copylinkIcon} alt="링크 공유" onClick={handleCopyLink} />
          </div>

          <button className="exit_button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="닫기버튼" />
          </button>
        </div>
      </div>
    )
  );
}
