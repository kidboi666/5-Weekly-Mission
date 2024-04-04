import './LinkCard.css';
import noImagePlaceholder from '../../assets/images/placeholder_image.png';
import kebab from '../../assets/images/kebab.svg';
import {
  STYLE_LINK_CARD_CLASS_NAME,
  STYLE_LINK_CARD_INFO_CLASS_NAME,
  STYLE_LINK_CARD_TIMESTAMP_BAR_CLASS_NAME,
  STYLE_TIMESTAMP_CLASS_NAME,
  STYLE_LINK_CARD_DESCRIPTION_CLASS_NAME,
  STYLE_LINK_CARD_CREATED_CLASS_NAME,
  STYLE_THUMBNAIL_CONTAINER_CLASS_NAME,
  STYLE_THUMBNAIL_CLASS_NAME,
} from './constants.js';
import getTimeDifference from '../../utils/time-functions/getTimeDifference.js';
import formatDate from '../../utils/time-functions/formatDate.js';
import { useState } from 'react';

export default function LinkCard({ linkCardInfo }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const thumbnailURL = linkCardInfo.imageSource
    ? linkCardInfo.imageSource
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.createdAt);
  const timestamp = getTimeDifference(createdDate);

  const handleKebabClick = (event) => {
    setIsDropdownOpen(!isDropdownOpen);
    event.preventDefault();
  };

  return (
    <a
      className={STYLE_LINK_CARD_CLASS_NAME}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={STYLE_THUMBNAIL_CONTAINER_CLASS_NAME}>
        <img
          className={STYLE_THUMBNAIL_CLASS_NAME}
          src={thumbnailURL}
          alt="Link Thumbnail"
        />
      </div>
      <div className={STYLE_LINK_CARD_INFO_CLASS_NAME}>
        <div className={STYLE_LINK_CARD_TIMESTAMP_BAR_CLASS_NAME}>
          <span className={STYLE_TIMESTAMP_CLASS_NAME}>{timestamp}</span>
          <button onClick={handleKebabClick}>
            <img src={kebab} alt="kebab" />
          </button>
          {isDropdownOpen && (
            <ul>
              <li>삭제하기</li>
              <li>폴더에 추가</li>
            </ul>
          )}
        </div>
        <p className={STYLE_LINK_CARD_DESCRIPTION_CLASS_NAME}>{description}</p>
        <span className={STYLE_LINK_CARD_CREATED_CLASS_NAME}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}
