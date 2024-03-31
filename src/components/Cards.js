import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noImage from "../assets/noImage.svg";

const Img = styled.img`
  width: 20rem;
  height: 12.5rem;
  // 크기가 안 맞는 이미지를 위해 cover 추가
  object-fit: cover;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const TestBlock = styled.div`
  width: 20rem;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  &:hover {
    border: 2px solid #6d6afe;
  }

  div {
    padding: 1.25rem;
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
  width: 66.25rem;
  margin: 2.5rem auto;

  ul {
    display: flex;
    gap: 1.5625rem 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0;
    padding: 0;
  }
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
    <TestBlock>
      <Link to={item.url} target="_blank" style={linkStyle}>
        <Img src={addImage(item.imageSource)} alt={item.title} />

        <div>
          {/* <p>test: {TestTime(item.createdAt)}</p> */}
          {/* <p>createdAt: {item.createdAt}</p> */}
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{formatDate(item.createdAt)}</p>
        </div>
      </Link>
    </TestBlock>
  );
}

function Cards({ items }) {
  if (!items) {
    return <TestBlock>테스트</TestBlock>;
  }

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
