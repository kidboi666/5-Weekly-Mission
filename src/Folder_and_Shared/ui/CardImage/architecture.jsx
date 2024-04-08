import "./CardImage.css";
import DEFAULT_IMAGE from "./imgSrc/card-default.png";

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    />
  );
};
