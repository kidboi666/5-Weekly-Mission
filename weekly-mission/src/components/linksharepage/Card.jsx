import { Link } from "react-router-dom";
import noImage from "../../../image/noimage.svg";
import styled from "styled-components";
import PropTypes from "prop-types";
import { generateTimeText, formatDate } from "../../utils/Function";

const CardContainer = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px #00000014;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.3);
    position: relative;
    z-index: 1;
    background-color: rgba(255, 255, 255, 1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
`;

const CardText = styled.div`
  width: 100%;
  padding: 15px 20px;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  flex-direction: column;
`;

const CardTime = styled.p`
  font-size: 13px;
  line-height: 15.51px;
  color: #666666;
  font-weight: 400;
  text-align: left;
`;

const CardDescription = styled.div`
  width: 300px;
  height: 48px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #333333;
  text-align: left;
`;

const CardDate = styled.div`
  font-size: 14px;
  line-height: 16.71px;
  color: #333333;
  font-weight: 400;
  text-align: left;
`;

const Card = ({ link }) => {
  const { url, title, description } = link;
  const createdAt = link.createdAt || link.created_at;
  const imageSource = link.imageSource || link.image_source;
  return (
    <CardContainer>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <CardImage src={imageSource || noImage} alt={title || "noImage"} />
      </Link>
      <CardText>
        <CardTime>{generateTimeText(createdAt)}</CardTime>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
        <CardDate>
          <p>{formatDate(createdAt)}</p>
        </CardDate>
      </CardText>
    </CardContainer>
  );
};

Card.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    image_source: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Card;
