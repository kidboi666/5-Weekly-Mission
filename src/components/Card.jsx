import React from 'react';
import styled from 'styled-components';
import { FALLBACK_IMG_URL } from '../contants/constant';

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
  flex-wrap: wrap;
`;

const Date = styled.span`
  color: #333333;
  font-size: 0.85rem;
  margin: 0;
`;

function Card({ url, src = '', desc, createdAt }) {
  const processedCreatedAt = createdAt.substr(0, 10);
  const substrDesc = desc.length > 10 ? desc.substr(0, 50) + '...' : desc;

  return (
    <>
      <Container>
        <Link href={url}>
          <Img src={src ? src : FALLBACK_IMG_URL} alt='대표 이미지' />
          <Desc>
            <Ago>dateNow - 'createdAt'</Ago>
            <Content>{substrDesc}</Content>
            <Date>{processedCreatedAt}</Date>
          </Desc>
        </Link>
      </Container>
    </>
  );
}

export default Card;
