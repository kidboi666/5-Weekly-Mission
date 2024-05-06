import styled from "styled-components";
import noImage from "../asset/noImage.png";
import star from "../asset/star.svg";
import kebabImg from "../asset/kebab.png";
import { MouseEvent, useState } from "react";
import Portal from "../Portal/Portal";
import ModalDeleteLink from "./Modal/ModalDeleteLink";
import ModalAddLink from "./Modal/ModalAddLink";
import { LinkItem } from "./CardList";

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 16px 12px;

  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Wrap = styled.div`
  position: relative;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 340px;
  height: 335px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  position: relative;

  &:hover .FolderImage_img {
    transform: scale(1.3);
    transition: transform 200ms;
  }

  &:hover ${CardInfo} {
    background-color: #f0f6ff;
    transition: all 200ms;
  }
`;

const FolderImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  & .FolderImage_img {
    object-fit: cover;
    transform: scale(1);
    transition: transform 200ms;
  }
`;

const LongAgo = styled.span`
  color: #666;
  font-size: 13px;
`;

const Title = styled.strong`
  font-size: 18px;
  height: 19px;
  font-weight: bold;
  overflow: hidden;
`;

const Info = styled.p`
  height: 17px;
  overflow: hidden;
`;

const CreatedAt = styled.time`
  color: #333;
  font-size: 14px;
`;

const Star = styled.button`
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 291px;
`;

const KebabContainer = styled.div`
  display: flex;
  overflow: unset;
  justify-content: space-between;
`;

const ButtonImgs = styled.img`
  display: inline-block;
  vertical-align: top;
`;

const KebabButton = styled.button`
  background: url(${kebabImg}) center no-repeat;
  width: 17px;
  height: 21px;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms;
  }
`;

const PopOver = styled.div`
  display: flex;
  position: absolute;
  top: 237px;
  left: 311px;
  width: 100px;
  flex-direction: column;
  row-gap: 2px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(51, 50, 54, 0.1);
  z-index: 1;
`;

const Button = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  color: #333236;
  font-size: 14px;
  line-height: normal;
  background-color: #fff;

  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;

function Card({ item, folder }: { item: LinkItem; folder: any }) {
  const {
    createdAt: cReatedAt,
    created_at,
    title,
    description,
    imageSource,
    image_source,
    url,
  } = item;
  const [show, setShow] = useState(false);
  const [modalDelLink, setModalDelLink] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const createdAt = cReatedAt ?? created_at;
  const bg = imageSource ?? image_source;

  const uploadDate = (value: string | number) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  function longAgo(value: string | number) {
    const date = new Date(value);
    const now = new Date();
    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 31 * DAY;
    const YEAR = 12 * MONTH;

    const time = Number(now) - Number(date);

    if (time < 120000) return "1 minute ago";
    if (time < HOUR) {
      const minutes = parseInt(String(time / MINUTE));
      return `${minutes} minute ago`;
    }
    if (time < 2 * HOUR) return "1 hour ago";
    if (time < DAY) {
      const hours = parseInt(String(time / HOUR));
      return `${hours} hours ago`;
    }
    if (time < 2 * DAY) return "1 day ago";
    if (time < MONTH) {
      const days = parseInt(String(time / DAY));
      return `${days} days ago`;
    }
    if (time < 2 * MONTH) return "1 month ago";
    if (time < YEAR) {
      const months = parseInt(String(time / MONTH));
      return `${months} months ago`;
    }
    if (time < 2 * YEAR) return "1 year ago";
    const years = parseInt(String(time / YEAR));
    return `${years} years ago`;
  }

  const clickkebab = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleStar = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const deleteClick = () => {
    setModalDelLink(!modalDelLink);
  };

  const addClick = () => {
    setModalAdd(!modalAdd);
  };

  return (
    <Wrap>
      {show && (
        <PopOver onClick={clickkebab}>
          <Button type="button" onClick={deleteClick}>
            삭제하기
          </Button>
          <Button type="button" onClick={addClick}>
            폴더에 추가
          </Button>
        </PopOver>
      )}
      <Frame>
        <Star onClick={handleStar} type="button">
          <ButtonImgs src={star} alt="즐겨찾기" height={34} width={34} />
        </Star>
        <a href={url} target="blank">
          <FolderImage>
            {bg ? (
              <img
                className="FolderImage_img"
                src={bg}
                alt=""
                height={200}
                width={340}
              />
            ) : (
              <img
                className="FolderImage_img"
                src={noImage}
                alt=""
                height={200}
                width={340}
              />
            )}
          </FolderImage>
          <CardInfo>
            <KebabContainer>
              <LongAgo>{longAgo(createdAt || 0)}</LongAgo>
              <KebabButton type="button" onClick={clickkebab}></KebabButton>
            </KebabContainer>
            <Title>{title}</Title>
            <Info>{description}</Info>
            <CreatedAt dateTime={createdAt}>
              {uploadDate(createdAt || 0)}
            </CreatedAt>
          </CardInfo>
        </a>
      </Frame>
      <Portal elementId="modal-root">
        {modalDelLink && (
          <ModalDeleteLink onClick={deleteClick} info={url}></ModalDeleteLink>
        )}
        {modalAdd && (
          <ModalAddLink
            onClick={addClick}
            url={url}
            folder={folder}
          ></ModalAddLink>
        )}
      </Portal>
    </Wrap>
  );
}

export default Card;
