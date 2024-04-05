import React from "react";
import noImage from "../../assets/no-image.png";
import { formatDateToString, formatDateToAgo } from "../../utils/date";
import { Link } from "react-router-dom";
import * as S from "./Card.styled";
import star from "../../assets/star_icon.png";
import starActive from "../../assets/star_active_icon.png";
import kebab from "../../assets/kebab_icon.png";

export default function Card({ item }) {
  const { createdAt, url, title, imageSource } = item;

  const dateBetween = formatDateToAgo(createdAt);
  const date = formatDateToString(createdAt);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("별 클릭");
  };

  return (
    <S.StyledCard>
      <Link to={url} target='_blank' rel='noreferrer'>
        <S.StyledThumnailWrap>
          <S.StyledThumnail
            src={imageSource ? imageSource : noImage}
            alt={title}
          />
        </S.StyledThumnailWrap>
        <S.StyledTextWrap>
          <S.StyledTextTopWrap>
            <S.StyledDateAgo>{dateBetween}</S.StyledDateAgo>
            <S.StyledKebab>
              <img src={kebab} alt='더보기' />
            </S.StyledKebab>
          </S.StyledTextTopWrap>
          <S.StyledTitle>{title}</S.StyledTitle>
          <S.StyledDate>{date}</S.StyledDate>
        </S.StyledTextWrap>
        <S.StyleStar onClick={handleClick}>
          <img src={star} alt='별' />
        </S.StyleStar>
      </Link>
    </S.StyledCard>
  );
}
