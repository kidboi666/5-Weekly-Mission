import { Link } from "react-router-dom";
import * as CardLayout from "./CardContainer.style";
import { DEFAULT_IMAGE } from "./constant";

export const CardContainer = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  const imgSrc = imageSource || DEFAULT_IMAGE;

  return (
    <CardLayout.CardWrap>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <CardLayout.CardImageWrap>
          <CardLayout.CardImage src={imgSrc} alt={alt} />
        </CardLayout.CardImageWrap>
        <CardLayout.CardContent>
          <CardLayout.CardContentElapsedTime>
            {elapsedTime}
          </CardLayout.CardContentElapsedTime>
          <CardLayout.CardContentDescription>
            {description}
          </CardLayout.CardContentDescription>
          <CardLayout.CardContentCreatedAt>
            {createdAt}
          </CardLayout.CardContentCreatedAt>
        </CardLayout.CardContent>
      </Link>
    </CardLayout.CardWrap>
  );
};
