import React from 'react';
import * as S from './Modal.styled';
import CloseImage from '../../assets/close_button.svg';
import KakaotalkIcon from '../../assets/share_kakaotalk.svg';
import facebookIcon from '../../assets/share_facebook.svg';
import linkIcon from '../../assets/share_link.svg';

export default function Modal({
  width,
  title,
  semiTitle,
  input,
  button,
  share,
  folders,
  counts,
}) {
  const handleCloseClick = () => {};

  return (
    <S.Layout>
      <S.Modal width={width}>
        <S.CloseButton onClick={handleCloseClick}>
          <img src={CloseImage} alt='모달 닫기' />
        </S.CloseButton>
        <S.Title>{title}</S.Title>
        {semiTitle && <S.SemiTitle>{semiTitle}</S.SemiTitle>}
        {input && <S.Input type='text' placeholder='내용 입력' value={input} />}
        {folders && (
          <S.FoldersList>
            {folders.map((folder, index) => (
              <li key={index}>
                <input type='radio' id={index} name='folder' value={folder} />
                <label htmlFor={index}>
                  <h3>{folder}</h3>
                  <span>{counts[index]}개 링크</span>
                </label>
              </li>
            ))}
          </S.FoldersList>
        )}
        {button && <S.StyledButton text={button} mt={semiTitle} />}
        {share && (
          <S.ShareList>
            <button>
              <img src={KakaotalkIcon} alt='카카오톡 공유' />
              <p>카카오톡</p>
            </button>
            <button>
              <img src={facebookIcon} alt='페이스북 공유' />
              <p>페이스북</p>
            </button>
            <button>
              <img src={linkIcon} alt='링크 복사' />
              <p>링크 복사</p>
            </button>
          </S.ShareList>
        )}
      </S.Modal>
    </S.Layout>
  );
}
