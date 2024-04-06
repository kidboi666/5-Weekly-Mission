import PropTypes from 'prop-types';
import './LinkCard.css';
import noImagePlaceholder from '../../assets/images/placeholder_image.png';
import starIcon from '../../assets/images/star.svg';
import purpleStarIcon from '../../assets/images/purplestar.svg';
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
  STYLE_KEBAB_BUTTON,
  STYLE_DROPDOWN_LIST,
  STYLE_DROPDOWN_ITEM,
} from './constants.js';
import getTimeDifference from '../../utils/time-functions/getTimeDifference.js';
import formatDate from '../../utils/time-functions/formatDate.js';
import { useState } from 'react';

export default function LinkCard({ linkCardInfo }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const thumbnailURL = linkCardInfo.imageSource
    ? linkCardInfo.imageSource
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.createdAt);
  const timestamp = getTimeDifference(createdDate);

  function handleKebabClick(event) {
    setIsDropdownOpen(!isDropdownOpen);
    event.preventDefault();
  }

  function handleStarClick(event) {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  }

  return (
    <a
      className={STYLE_LINK_CARD_CLASS_NAME}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={STYLE_THUMBNAIL_CONTAINER_CLASS_NAME}>
        <button onClick={handleStarClick} className="star-button">
          {isFavorite ? (
            <img
              src={purpleStarIcon}
              alt="favorite"
              className="purple-star-icon"
            />
          ) : (
            <img src={starIcon} alt="favorite" className="star-icon" />
          )}
        </button>
        <img
          className={STYLE_THUMBNAIL_CLASS_NAME}
          src={thumbnailURL}
          alt="Link Thumbnail"
        />
      </div>
      <div className={STYLE_LINK_CARD_INFO_CLASS_NAME}>
        <div className={STYLE_LINK_CARD_TIMESTAMP_BAR_CLASS_NAME}>
          <span className={STYLE_TIMESTAMP_CLASS_NAME}>{timestamp}</span>
          <div className="kebab-button-container">
            <button onClick={handleKebabClick} className={STYLE_KEBAB_BUTTON}>
              <img src={kebab} alt="kebab" className={STYLE_KEBAB_BUTTON} />
            </button>
            {isDropdownOpen && (
              <ul className={STYLE_DROPDOWN_LIST}>
                <li className={STYLE_DROPDOWN_ITEM}>삭제하기</li>
                <li className={STYLE_DROPDOWN_ITEM}>폴더에 추가</li>
              </ul>
            )}
          </div>
        </div>
        <p className={STYLE_LINK_CARD_DESCRIPTION_CLASS_NAME}>{description}</p>
        <span className={STYLE_LINK_CARD_CREATED_CLASS_NAME}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}

LinkCard.propTypes = {
  linkCardInfo: PropTypes.shape({
    imageSource: PropTypes.string,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired, // Assuming createdAt is a string representing date
  }).isRequired,
};
