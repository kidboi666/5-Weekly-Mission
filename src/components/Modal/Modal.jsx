import React from 'react';
import * as S from './Modal.styled';
import CloseImage from '../../assets/close_button.svg';

export default function Modal({ width, title, input, button, onClick }) {
  const handleCloseClick = () => {};

  return (
    <S.Layout>
      <S.Modal width={width}>
        <S.CloseButton onClick={handleCloseClick}>
          <img src={CloseImage} alt='모달 닫기' />
        </S.CloseButton>
        <S.Title>{title}</S.Title>
        {input && <S.Input type='text' placeholder='내용 입력' value={input} />}
        {button && <S.StyledButton text={button} />}
      </S.Modal>
    </S.Layout>
  );
}
