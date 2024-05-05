import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import { Popover } from "sharing/ui-popover/Popover";

const cx = classNames.bind(styles);

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  onDeleteClick,
  onAddLinkClick,
}) => {
  const KebabButtonRef = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick = (e) => {
    e.preventDefault();
    setIsPopoverOpen(true);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddLinkClick = (e) => {
    e.preventDefault();
    onAddLinkClick();
    setIsPopoverOpen(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>

        <button
          ref={KebabButtonRef}
          className={cx("kebab")}
          onClick={handleKebabClick}
        >
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        <Popover isOpen={isPopoverOpen} anchorRef={KebabButtonRef}>
          <ul className={cx("popover-list")}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddLinkClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </a>
  );
};
