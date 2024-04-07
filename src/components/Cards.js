import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Time } from "../util/time";
import { contentDate } from "../util/contentDate";
import noImage from "../assets/noImage.svg";
import starIcon from "../assets/starIcon.svg";
import purpleStarIcon from "../assets/purpleStarIcon.svg";
import kebabIcon from "../assets/kebabIcon.svg";

function ReviewListItem({ item }) {
  const imageData = item.imageSource;
  const folderImageData = item.image_source;

  // function onClick(event) {
  //   console.log(event.target.src);
  //   event.target.src === purpleStarIcon
  //     ? (event.target.src = starIcon)
  //     : (event.target.src = purpleStarIcon);
  // }

  return (
    <ContentBlock>
      <Link to={item.url} target="_blank" style={linkStyle}>
        <ImgBlock>
          <img src={imageData ?? folderImageData ?? noImage} alt={item.title} />
        </ImgBlock>
        <TextBlock>
          <p>{Time(item.createdAt)}</p>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{contentDate(item.createdAt ?? item.created_at)}</p>
        </TextBlock>
      </Link>
      {/* <button onClick={onClick}> */}
      <StarIcon src={starIcon} alt="즐겨찾기 아이콘" />
      {/* </button> */}
      <KebabIcon src={kebabIcon} alt="더보기 아이콘" />
    </ContentBlock>
  );
}

function Cards({ items }) {
  if (!items) {
    return <NotLinkBlock>저장된 링크가 없습니다.</NotLinkBlock>;
  }

  return (
    <CardsBlock>
      <ul>
        {items.map((item) => {
          return <ReviewListItem key={item?.id} item={item} />;
        })}
      </ul>
    </CardsBlock>
  );
}

export default Cards;

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
  position: relative;
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

const StarIcon = styled.img`
  position: absolute;
  top: 0.94rem;
  right: 0.94rem;

  &:hover {
    cursor: pointer;
  }
`;

const KebabIcon = styled.img`
  position: absolute;
  top: 13.5rem;
  right: 0.94rem;

  &:hover {
    cursor: pointer;
  }
`;

const NotLinkBlock = styled.span`
  display: flex;
  height: 6.25rem;
  justify-content: center;
  align-items: center;
`;
