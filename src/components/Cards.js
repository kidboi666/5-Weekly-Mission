import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "../assets/noImage.svg";

const ImgBlock = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;

  img {
    width: 20rem;
    height: 12.5rem;
    // 크기가 안 맞는 이미지를 위해 cover 추가
    object-fit: cover;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;

    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.4);
    }
  }
`;

const ContentBlock = styled.div`
  width: 20rem;
  border: 2px solid transparent;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  overflow: hidden;

  &:hover {
    border: 2px solid #6d6afe;
  }

  p {
    margin: 0;
    // 긴 내용 생략
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;

const CardsBlock = styled.div`
  margin: 2.5rem auto;

  ul {
    display: flex;
    gap: 1.5625rem 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0;
    padding: 0 6rem;

    @media screen and (max-width: 1124px) {
      padding: 0 2rem;
    }
  }
`;

const TextBlock = styled.div`
  padding: 1.25rem;
`;

const linkStyle = { textDecoration: "none", color: "#000000" };

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}  `;
  // / ${date.getHours()}시 ${date.getSeconds()}분
}

function addImage(image = noImage) {
  return image;
}

function ReviewListItem({ item }) {
  // const timeData = item.createdAt;

  return (
    <ContentBlock>
      <Link to={item.url} target="_blank" style={linkStyle}>
        <ImgBlock>
          <img src={addImage(item.imageSource)} alt={item.title} />
        </ImgBlock>
        <TextBlock>
          {/* <p>test: {TestTime(item.createdAt)}</p> */}
          {/* <p>createdAt: {item.createdAt}</p> */}
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{formatDate(item.createdAt)}</p>
        </TextBlock>
      </Link>
    </ContentBlock>
  );
}

function Cards({ items }) {
  // if (!items) {
  //   return <ContentBlock>테스트</ContentBlock>;
  // }

  // key 추가하기
  return (
    <CardsBlock>
      <ul>
        {items.map((item) => {
          return (
            <>
              <ReviewListItem item={item} />
            </>
          );
        })}
      </ul>
    </CardsBlock>
  );
}

export default Cards;
