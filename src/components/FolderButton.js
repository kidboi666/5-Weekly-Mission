import React, { useState } from "react";
import styled from "styled-components";
import addIcon from "../assets/addIcon.svg";
import WhiteAddIcon from "../assets/WhiteAddIcon.svg";
import LinkContent from "../components/LinkContent";
import { Link } from "react-router-dom";

// const COLOR = {
//   buttonColor: "#000",
//   add: "#6D6AFE",
// };

// const buttonItems = [
//   {
//     id: 1,
//     title: "전체",
//   },
//   {
//     id: 2,
//     title: "⭐️ 즐겨찾기",
//   },
//   {
//     id: 3,
//     title: "코딩 팁",
//   },
//   {
//     id: 4,
//     title: "채용 사이트",
//   },
//   {
//     id: 5,
//     title: "유용한 글",
//   },
//   {
//     id: 6,
//     title: "나만의 장소",
//   },
// ];

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 2.5rem 6rem 1.5rem;

  @media screen and (max-width: 1124px) {
    margin: 2.5rem 2rem 1.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;

    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  span {
    display: flex;
  }
`;

const Button = styled.button`
  color: #000;
  border-radius: 0.3125rem;
  border: 1px solid #6d6afe;
  padding: 0.4rem 0.4rem;

  &:hover {
    background: #6d6afe;
    color: white;
    cursor: pointer;
  }
`;

const AddFolderButton = styled.button`
  gap: 0.25rem;
  color: #6d6afe;
  border: 0px solid #6d6afe;

  @media screen and (max-width: 545px) {
    z-index: 1;
    position: fixed;
    background: #6d6afe;
    border-radius: 1.25rem;
    border: 2px solid #6d6afe;
    padding: 0.5rem 1.5rem;
    bottom: 101px;
    left: 37%;

    &:hover {
      background: #6d6afe;
      color: white;
      cursor: pointer;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

function FolderButton({ folderItems, items }) {
  // const [text, setText] = useState([]);
  const [text, setText] = useState([]);

  const onClick = (event) => {
    const button = event.target;
    const buttonText = event.target.textContent;
    // const background = button.style.background;
    // const color = button.style.color;

    if (text.find((item) => item === buttonText)) {
      setText((prevText) => prevText.filter((item) => item !== buttonText));
    } else {
      setText((prevText) => [...prevText, buttonText]);
    }

    if (button.style.background === "rgb(109, 106, 254)") {
      button.style.background = "#fff";
      button.style.color = "#000";
    } else {
      button.style.background = "#6d6afe";
      button.style.color = "white";
    }
  };

  return (
    <>
      <ButtonBlock>
        <div>
          {/* <Link to="all"> */}
          <Button onClick={onClick}>전체</Button>
          {/* </Link> */}

          {folderItems.map((item) => {
            return (
              <Button key={item?.id} onClick={onClick} type="button">
                {item.name}
              </Button>
            );
          })}
        </div>
        <AddFolderButton>
          폴더 추가
          <img src={addIcon} alt="추가 아이콘" />
        </AddFolderButton>
      </ButtonBlock>
      <LinkContent items={items} text={text} />
    </>
  );
}

export default FolderButton;
