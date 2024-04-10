import React, { useState } from 'react';
import styled from 'styled-components';
import { CARD_DESC_FORMAT_NUM, FALLBACK_IMG_SRC } from '../contants/constant';
import { diffDate, formatDate } from '../utils/dateLog';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const Container = styled.div`
  width: 340px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const A = styled.a`
  text-decoration: none;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 340px;
  height: 200px;
  border-radius: 15px 15px 0px 0px;
  margin: 0;
  object-fit: cover;
`;

const StarIcon = styled.button`
  position: absolute;
  bottom: 9.5rem;
  left: 18.5rem;
  border: none;
  background-color: transparent;
  width: auto;
  padding: 0;

  & svg {
    display: block;
    color: white;
    width: 100%;
    height: 2rem;
    fill: #fc8c03;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 340px;
  height: 140px;
  border-radius: 0px 0px 15px 15px;
  margin: 0px;
  padding: 15px 20px;
`;

const Ago = styled.span`
  color: #666666;
  font-size: 0.8rem;
`;

const Content = styled.p`
  font-size: 1rem;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;

  white-space: normal;
`;

const Date = styled.span`
  color: #333333;
  font-size: 0.85rem;
`;

function Card({ url, src = '', desc, createdAt, isFavorite, onClick }) {
  const [toggleStar, setToggleStar] = useState(isFavorite);

  const formatedCreatedAt = formatDate(createdAt);
  const formatedDesc =
    desc.length > 0 ? desc.substr(0, CARD_DESC_FORMAT_NUM) + '...' : desc;
  const timeAgo = diffDate(createdAt);

  const handleToggleStar = () => {
    setToggleStar(!toggleStar);
  };
  return (
    <>
      <Container>
        <A href={url} target='_blank'>
          <ImgContainer>
            <Img src={src ? src : FALLBACK_IMG_SRC} alt='대표 이미지' />
            <StarIcon onClick={handleToggleStar}>
              {toggleStar ? <FaStar /> : <FaRegStar />}
            </StarIcon>
          </ImgContainer>
          <Desc>
            <Ago>{timeAgo}</Ago>
            <Content>{formatedDesc}</Content>
            <Date>{formatedCreatedAt}</Date>
          </Desc>
        </A>
      </Container>
    </>
  );
}

export default Card;
