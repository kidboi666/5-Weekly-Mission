import DEFAULT_IMAGE from "./imgSrc/default.png";
import {CardImageTemplate} from "./design"

export const CardImage = ({ imageSource, alt }) => {

  return (
    <CardImageTemplate
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      alt={alt}
    />
  );
};
