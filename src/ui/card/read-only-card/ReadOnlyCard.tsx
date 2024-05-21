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

/**
 * ReadOnlyCard 컴포넌트는 읽기 전용 카드로, 이미지, 설명, 경과 시간 등을 포함합니다.
 *
 * @component
 * @example
 * return (
 *   <ReadOnlyCard
 *     url="https://example.com"
 *     imageSource="image.jpg"
 *     alt="이미지 설명"
 *     elapsedTime="5분 전"
 *     description="이것은 설명입니다."
 *     createdAt="2022-01-01"
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.url - 카드가 링크될 URL입니다.
 * @param {string} props.imageSource - 카드에 표시될 이미지의 소스 URL입니다.
 * @param {string} props.alt - 이미지의 대체 텍스트입니다.
 * @param {string} props.elapsedTime - 경과 시간을 나타내는 텍스트입니다.
 * @param {string} props.description - 카드의 설명 텍스트입니다.
 * @param {string} props.createdAt - 생성 일자를 나타내는 텍스트입니다.
 * 
 * @returns {JSX.Element} 읽기 전용 카드를 렌더링하는 컴포넌트입니다.
 */

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
