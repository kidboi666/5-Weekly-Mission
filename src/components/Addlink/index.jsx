import styles from './index.module.css';
import addLinkIcon from '../../assets/link.svg';
import styled from 'styled-components';
import { useState } from 'react';
import ModalAddToFolder from '../../modal/ModalAddToFolder';

const AddlinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24.4rem;
  padding: 2rem 0 6rem;
  background-color: var(--light-blue);
`;

function Addlink() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetName, setTargetName] = useState('');

  function handleClickButton() {
    setIsModalOpen((prev) => !prev);
  }
  function handleChange(event) {
    setTargetName(event.target.value);
  }
  function handleCloseModal(isOpen) {
    setIsModalOpen(isOpen); // 모달을 닫습니다.
  }

  return (
    <AddlinkContainer>
      <div className={styles.addLinkBar}>
        <input
          type="search"
          className={styles.addLinkInput}
          placeholder="링크를 추가해 보세요."
          value={targetName}
          onChange={handleChange}
        />
        <img
          src={addLinkIcon}
          className={styles.addLinkIcon}
          alt="링크 추가 아이콘"
        />
        <button className={styles.addLinkButton} onClick={handleClickButton}>
          추가하기
        </button>
        {isModalOpen && (
          <ModalAddToFolder
            title={'폴더에 추가'}
            targetName={targetName}
            isModalOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </AddlinkContainer>
  );
}

export default Addlink;
