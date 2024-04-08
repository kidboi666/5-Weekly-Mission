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
  isEdit,
}) => {
  const imgSrc = imageSource || DEFAULT_IMAGE;

  return (
    <CardLayout.CardWrap>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <CardLayout.CardImageWrap>
          {isEdit && (
            <>
              <CardLayout.FavoritCardButton
                onClick={(event) => event.preventDefault()}
              >
                <img src="images/icon/star.svg" alt="즐겨찾기" />
              </CardLayout.FavoritCardButton>
              <CardLayout.KebabButton
                onClick={(event) => event.preventDefault()}
              >
                <img src="images/icon/kebab.svg" alt="더보기" />
              </CardLayout.KebabButton>
            </>
          )}
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
