import styled from 'styled-components';
import { useState, useRef } from 'react';
import addIcon from '../../assets/plus.svg';
import addIconWhite from '../../assets/plus-white.svg';
import styles from '@/styles/Modal.module.css';
import GradientButton from '../Button/GradientButton';
import ModalTitle from './ModalTitle';
import ModalInput from './ModalInput';

function Modal({ children, title, content, buttonMessage }) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div className={styles.btn - wrapper}>
        <ModalOpenButton className={styles.modal - open - btn} onClick={() => setModalOpen(true)}>
          {children}
        </ModalOpenButton>
      </div>
      {modalOpen && (
        <div
          className={styles.modal - container}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={styles.modal - content}>
            <ModalTitle>{title}</ModalTitle>
            <ModalInput placeholder="내용 입력" />
            <GradientButton className={styles.modal - close - btn} size="auto" onClick={() => setModalOpen(false)}>
              {buttonMessage}
            </GradientButton>
          </div>
        </div>
      )}
    </>
  );
}

const ModalOpenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
  height: 20px;
  color: var(--primary);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  grid-area: addFolder;
  cursor: pointer;

  & .icon {
    width: 16px;
    height: 16px;
    background-image: url(${addIcon});
    background-size: cover;
  }

  @media screen and (max-width: 767px) {
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    padding: 8px 24px;
    height: 35px;
    color: #fff;
    z-index: 10;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0);

    & .icon {
      background-image: url(${addIconWhite});
    }
  }
`;

export default Modal;
