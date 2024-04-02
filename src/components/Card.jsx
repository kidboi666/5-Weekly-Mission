import React from 'react';
import styled from 'styled-components';
import { CARD_DESC_FORMAT_NUM, FALLBACK_IMG_SRC } from '../contants/constant';
import { diffDate, formatDate } from '../utils/dateLog';

const Container = styled.div`
  width: 340px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  width: 340px;
  height: 200px;
  border-radius: 15px 15px 0px 0px;
  margin: 0;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 300px;
  height: 100px;
  border-radius: 0px 0px 15px 15px;
  margin: 0px;
  padding: 15px 20px;
`;

const Ago = styled.span`
  color: #666666;
  font-size: 0.8rem;
  margin: 0px;
`;

const Content = styled.p`
  font-size: 1rem;
  margin: 0px;
  display: flex;
  flex-wrap: nowrap;
`;

const Date = styled.span`
  color: #333333;
  font-size: 0.85rem;
  margin: 0;
`;

function Card({ url, src = '', desc, createdAt }) {
  const formatedCreatedAt = formatDate(createdAt);
  const formatedDesc =
    desc.length > 1 ? desc.substr(0, CARD_DESC_FORMAT_NUM) + '...' : desc;
  const timeAgo = diffDate(createdAt);

  return (
    <>
      <Container>
        <Link href={url} target='_blank'>
          <Img src={src ? src : FALLBACK_IMG_SRC} alt='대표 이미지' />
          <Desc>
            <Ago>{timeAgo}</Ago>
            <Content>{formatedDesc}</Content>
            <Date>{formatedCreatedAt}</Date>
          </Desc>
        </Link>
      </Container>
    </>
  );
}

export default Card;
