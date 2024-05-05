import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./Card.styled";
import noImage from "../../../image/noimage.svg";
import starbutton from "../../../image/star.svg";
import kebab from "../../../image/kebab.svg";
import { generateTimeText, formatDate } from "../../utils/Function";
import Popover from "../Popover/Popover";

interface CardProps {
  link: {
    id: number;
    createdAt?: string;
    created_at?: string;
    url: string;
    title?: string;
    description?: string;
    imageSource?: string;
    image_source?: string;
  };
  isFolderPage: boolean;
}

const Card = ({ link, isFolderPage }: CardProps) => {
  const { url, title, description } = link;
  const createdAt = link.createdAt || link.created_at || "";
  const imageSource = link.imageSource || link.image_source;

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleTogglePopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  return (
    <S.CardContainer>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <S.CardImage src={imageSource || noImage} alt={title || "No Image"} />
      </Link>
      <S.StarButton src={starbutton} alt="즐겨찾기" />
      <S.CardText>
        <S.CardTime>{generateTimeText(createdAt)}</S.CardTime>

        {isFolderPage && (
          <S.KebabButton
            src={kebab}
            alt="더보기"
            onClick={handleTogglePopover}
          />
        )}

        {isPopoverOpen && (
          <S.PopoverContent>
            <Popover />
          </S.PopoverContent>
        )}

        <S.CardDescription>
          <p>{description}</p>
        </S.CardDescription>
        <S.CardDate>
          <p>{formatDate(createdAt)}</p>
        </S.CardDate>
      </S.CardText>
    </S.CardContainer>
  );
};

export default Card;
