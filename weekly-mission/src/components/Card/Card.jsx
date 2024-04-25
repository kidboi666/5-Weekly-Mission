import { Link } from "react-router-dom";
import * as S from "./Card.styled";
import noImage from "../../../image/noimage.svg";
import { generateTimeText, formatDate } from "../../utils/Function";

const Card = ({ link }) => {
  const { url, title, description } = link;
  const createdAt = link.createdAt || link.created_at;
  const imageSource = link.imageSource || link.image_source;

  return (
    <S.CardContainer>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <S.CardImage src={imageSource || noImage} alt={title || "No Image"} />
      </Link>
      <S.CardText>
        <S.CardTime>{generateTimeText(createdAt)}</S.CardTime>
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
