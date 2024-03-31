import React, { useEffect } from 'react';
import styled from 'styled-components';
import useGetData from './hooks/useGetData';

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
  border-radius: 15px 15px 0px 0px;
  margin: 0;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample/folder';
function Card({ src, ago }) {
  const [data, isLoading, error, fetchData] = useGetData(BASE_URL);

  useEffect(() => {
    fetchData(BASE_URL);
  }, [BASE_URL]);
  console.log(data);

  return (
    <>
      <Container>
        <Link href='card--link'>
          {/* TODO : get 요청으로 온 이미지와 컨텐츠를 보여줘야 함 */}
          <Img src={src} alt='대표 이미지' />
          <Desc>
            <Ago>지난시간</Ago>
            <Content>콘텐츠 내용</Content>
            <Date>게시 날짜</Date>
          </Desc>
        </Link>
      </Container>
    </>
  );
}

export default Card;
