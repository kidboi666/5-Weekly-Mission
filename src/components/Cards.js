import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 20rem;
  height: 12.5rem;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const TestBlock = styled.div`
  width: 20rem;
  border-radius: 14px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

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
  margin: 0 auto;

  ul {
    display: flex;
    gap: 1.5625rem 1.25rem;
    flex-wrap: wrap;
  }
`;

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${
    date.getMonth() + 1
  }. ${date.getDate()} / ${date.getHours()}시 ${date.getSeconds()}분`;
}

function ReviewListItem({ item }) {
  // console.log("item", item);

  return (
    <TestBlock>
      {/* <p>id: {item.id}</p> */}
      <Img src={item.imageSource} alt={item.title} />
      <div>
        <p>url: {item.url}</p>
        <p>날짜: {formatDate(item.createdAt)}</p>
        <p>createdAt: {item.createdAt}</p>
        <p>title: {item.title}</p>
        <p>description: {item.description}</p>
      </div>
    </TestBlock>
  );
}

function Cards({ items }) {
  // console.log("items", items);

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
