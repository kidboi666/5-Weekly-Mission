import React, { useState } from 'react';
import defaultImage from '../../assets/no-image.png';
import { formatDateToString, formatDateToAgo } from '../../utils/date';
import { Link } from 'react-router-dom';
import * as S from './Card.styled';
import star from '../../assets/star_icon.png';
// import starActive from "../../assets/star_active_icon.png";
import kebab from '../../assets/kebab_icon.png';

export default function Card({ item }) {
  const { createdAt, url, title, imageSource } = item;
  const [visibleKebabModal, setVisibleKebabModal] = useState(false);

  const dateBetween = formatDateToAgo(createdAt);
  const date = formatDateToString(createdAt);

  const addDefaultImage = (e) => {
    e.currentTarget.src = defaultImage;
  };

  const handleStarClick = (e) => {
    e.preventDefault();
    console.log('별 클릭');
  };
  const handleKebabClick = (e) => {
    e.preventDefault();
    setVisibleKebabModal(!visibleKebabModal);
  };

  return (
    <S.Card>
      <Link to={url} target='_blank' rel='noreferrer'>
        <S.ThumnailWrap>
          <S.Thumnail
            src={imageSource ? imageSource : defaultImage}
            alt={title}
            onError={addDefaultImage}
          />
        </S.ThumnailWrap>
        <S.TextWrap>
          <S.TextTopWrap>
            <S.DateAgo>{dateBetween}</S.DateAgo>
            <S.Kebab onClick={handleKebabClick}>
              <img src={kebab} alt='더보기' />
            </S.Kebab>
            {visibleKebabModal && (
              <S.KebabModal>
                <button>삭제하기</button>
                <button>폴더에 추가</button>
              </S.KebabModal>
            )}
          </S.TextTopWrap>
          <S.Title>{title}</S.Title>
          <S.Date>{date}</S.Date>
        </S.TextWrap>
        <S.Star onClick={handleStarClick}>
          <img src={star} alt='별' />
        </S.Star>
      </Link>
    </S.Card>
  );
}
