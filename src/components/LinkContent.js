import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import shareIcon from "../assets/SearchIcon.svg";
import penIcon from "../assets/penIcon.svg";
import wastebasketIcon from "../assets/wastebasketIcon.svg";

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;
  margin: 2.5rem 6rem 1.5rem;

  @media screen and (max-width: 1124px) {
    margin: 1.5rem 2rem 1.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0;
    background: #fff;
    border: 0px solid #6d6afe;
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &:hover {
      cursor: pointer;
    }
  }
`;

const choiceItems = [
  {
    id: 1,
    image: shareIcon,
    text: "공유",
  },
  {
    id: 2,
    image: penIcon,
    text: "이름 변경",
  },
  {
    id: 3,
    image: wastebasketIcon,
    text: "삭제",
  },
];

function Text({ text }) {
  const allItem = text.find((item) => item === "전체");

  if (allItem !== "전체" && text.length !== 0) {
    return (
      <div>
        {choiceItems.map((item) => {
          return (
            <button key={item?.id}>
              <img src={item.image} alt={item.text} />
              {item.text}
            </button>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
}

function LinkContent({ items, text }) {
  return (
    <>
      <ContentBlock>유용한 글{Text({ text })}</ContentBlock>
      <Cards items={items} />
    </>
  );
}

export default LinkContent;
