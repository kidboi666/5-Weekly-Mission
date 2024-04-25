import { useFetch } from '../../utils/hooks/useFetch';
import { formatDate, generateTimeText } from '../../utils/hooks/date';
import thumbnail from '../../assets/thumbnail.svg';
import styles from './index.module.css';
import starticon from '../../assets/staricon.svg';
import moreoptionicon from '../../assets/moreoptionicon.svg';
import { useState } from 'react';
import ModalFolder from '../../modal/ModalFolder';
import ModalDelete from '../../modal/ModalDelete';

function Cardsfolder(props) {
  const CardData = useFetch(props.url);
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [popoverStates, setPopoverStates] = useState({});
  const [selectedCardDescription, setSelectedCardDescription] = useState('');

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function handleCloseModal(isOpen) {
    setIsModalOpen(isOpen);
  }

  function handleCloseDeleteModal(isOpen) {
    setIsModalDeleteOpen(isOpen);
  }

  function handleClickButton() {
    setIsModalOpen((prev) => !prev);
  }

  function handleDeleteClickButton(linkDescription) {
    setIsModalDeleteOpen(true);
    setSelectedCardDescription(linkDescription); // 삭제할 링크의 description 설정
  }

  const handleOptionButtonClick = (linkId, linkDescription) => {
    setPopoverStates((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId],
    }));
    setSelectedCardDescription(linkDescription); // 팝오버가 열린 카드의 description 설정
  };

  const handleFavoriteButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.card_grid_container}>
      {CardData ? (
        CardData.data.map((link) => (
          <div className={styles.card_container} key={link.id}>
            <a href={link.url}>
              <div className={styles.card}>
                <div className={styles.card_img_div}>
                  {link.image_source ? (
                    <img
                      src={link.image_source}
                      className={`${styles.card_img} ${
                        isHovering ? styles.zoomIn : ''
                      }`}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      alt={link.title}
                    />
                  ) : (
                    <img
                      src={thumbnail}
                      className={`${styles.card_img} ${
                        isHovering ? styles.zoomIn : ''
                      }`}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      alt="thumbnail_img"
                    />
                  )}
                </div>
                <div
                  className={`${styles.card_txt_div} ${
                    isHovering ? styles.coloredText : ''
                  }`}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <div className={styles.card_txt_div_top}>
                    <p className={styles.left_time_p}>
                      {generateTimeText(link.created_at)}
                    </p>
                  </div>
                  <div className={styles.card_txt_div_body}>
                    <p className={styles.card_txt_div_body}>
                      {link.description}
                    </p>
                  </div>
                  <div className={styles.card_txt_date}>
                    {formatDate(link.created_at)}
                  </div>
                </div>
              </div>
            </a>
            <button
              className={styles.card_moreoption_icon}
              onClick={() => handleOptionButtonClick(link.id, link.description)}
            >
              <img src={moreoptionicon} alt="링크 게시물 옵션 버튼 아이콘 " />
            </button>
            {popoverStates[link.id] && (
              <div className={styles.popover}>
                <div className={styles.options}>
                  <button
                    onClick={() => handleDeleteClickButton(link.description)}
                  >
                    삭제하기
                  </button>
                </div>
                <div className={styles.options}>
                  <button onClick={handleClickButton}>폴더에 추가</button>
                </div>
              </div>
            )}
            <button
              className={styles.card_favorite_icon}
              onClick={handleFavoriteButtonClick}
            >
              <img src={starticon} alt="즐겨찾기 별 아이콘" />
            </button>
          </div>
        ))
      ) : (
        <div className={styles.noLinkText}>
          <p>저장된 링크가 없습니다</p>
        </div>
      )}
      {isModalOpen && (
        <ModalFolder
          title={'폴더 추가'}
          buttonName={'추가하기'}
          onClose={handleCloseModal}
          isModalOpen={isModalOpen}
        />
      )}
      {isModalDeleteOpen && (
        <ModalDelete
          title={'링크 삭제'}
          DeleteName={selectedCardDescription}
          onClose={handleCloseDeleteModal}
          isModalOpen={isModalDeleteOpen}
        />
      )}
    </div>
  );
}

export default Cardsfolder;
