import { useState } from "react";
import { Template, Content, Image } from "../parts";

type ReadOnlyCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
};

export const ReadOnlyCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadOnlyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Template onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Image imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <Content
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Template>
    </a>
  );
};
