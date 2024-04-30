import "./CardImage.css";

export const CardImage = ({ imageSource, alt, isZoomIn }) => {
  const className = isZoomIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{
        backgroundImage: `url(${imageSource ?? "images/card-default.png"})`,
      }}
      alt={alt}
      className={className}
    />
  );
};
