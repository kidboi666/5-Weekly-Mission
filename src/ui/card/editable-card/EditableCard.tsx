import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import {
  CSSProperties,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { usePopper } from "react-popper";
import { AiOutlineMore, AiFillStar } from "react-icons/ai";
import { Popover } from "@/src/ui";
import { Template, Content, Image } from "../parts";

const cx = classNames.bind(styles);

type EditableCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  popoverPosition?: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
};

/**
 * EditableCard 컴포넌트는 수정 가능한 카드로, 이미지, 설명, 경과 시간 등을 포함하며,
 * 더보기 버튼을 통해 삭제 및 폴더에 추가 기능을 제공합니다.
 *
 * @component
 * @example
 * return (
 *   <EditableCard
 *     url="https://example.com"
 *     imageSource="image.jpg"
 *     alt="이미지 설명"
 *     elapsedTime="5분 전"
 *     description="이것은 설명입니다."
 *     createdAt="2022-01-01"
 *     onDeleteClick={() => console.log("삭제 클릭됨")}
 *     onAddToFolderClick={() => console.log("폴더에 추가 클릭됨")}
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
 * @param {Object} [props.popoverPosition] - 팝오버의 위치를 설정하는 객체입니다.
 * @param {CSSProperties["top"]} [props.popoverPosition.top] - 팝오버의 상단 위치입니다.
 * @param {CSSProperties["right"]} [props.popoverPosition.right] - 팝오버의 오른쪽 위치입니다.
 * @param {CSSProperties["bottom"]} [props.popoverPosition.bottom] - 팝오버의 하단 위치입니다.
 * @param {CSSProperties["left"]} [props.popoverPosition.left] - 팝오버의 왼쪽 위치입니다.
 * @param {() => void} props.onDeleteClick - 삭제 버튼 클릭 시 호출되는 함수입니다.
 * @param {() => void} props.onAddToFolderClick - 폴더에 추가 버튼 클릭 시 호출되는 함수입니다.
 *
 * @returns {JSX.Element} 수정 가능한 카드를 렌더링하는 컴포넌트입니다.
 */
export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const { styles: popperStyles, attributes } = usePopper(
    kebabButtonRef.current,
    popperRef.current,
    {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8], // Adjust the offset to position the popover
          },
        },
        {
          name: "preventOverflow",
          options: {
            boundary: "clippingParents",
            padding: 8, // Add padding to prevent overflow
          },
        },
      ],
    }
  );

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleKebabClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      setIsPopoverOpen((prev) => !prev);
    },
    []
  );
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick: MouseEventHandler<HTMLLIElement> = useCallback(
    (event) => {
      event.preventDefault();
      onDeleteClick();
      setIsPopoverOpen(false);
    },
    [onDeleteClick]
  );
  const handleAddToFolderClick: MouseEventHandler<HTMLLIElement> = useCallback(
    (event) => {
      event.preventDefault();
      onAddToFolderClick();
      setIsPopoverOpen(false);
    },
    [onAddToFolderClick]
  );

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
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <AiFillStar style={{ fontSize: "2.4rem" }} />
        </button>
        <button
          ref={kebabButtonRef}
          className={cx("kebab")}
          onClick={handleKebabClick}
        >
          <AiOutlineMore style={{ fontSize: "2.1rem" }} />
        </button>
        {isPopoverOpen && (
          <div
            ref={popperRef}
            className={cx("popper")}
            style={popperStyles.popper}
            {...attributes.popper}
          >
            <Popover
              isOpen={isPopoverOpen}
              onBackgroundClick={handleBackgroundClick}
            >
              <ul className={cx("popover-list")}>
                <li onClick={handleDeleteClick}>삭제하기</li>
                <li onClick={handleAddToFolderClick}>폴더에 추가</li>
              </ul>
            </Popover>
          </div>
        )}
      </Template>
    </a>
  );
};
