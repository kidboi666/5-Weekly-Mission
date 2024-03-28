import useFetchData from "../Hooks/useFetchData";
import noImage from "../../image/noimage.svg";
import styled from "styled-components";

const CardContainer = styled.div`
  .card_grid_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 20px;
  }

  .card {
    width: 340px;
    height: 334px;
    border-radius: 15px;
    box-shadow: 0px 5px 25px 0px #00000014;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: scale(1.3);
    }
  }

  .card_img_div {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .card_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card_text {
    width: 100%;
    padding: 15px 20px;
    gap: 10px;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    flex-direction: column;
  }

  .card_text_time,
  .card_text_date {
    font-weight: 400;
    text-align: left;
  }

  .card_text_description {
    width: 300px;
    height: 48px;
    overflow: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #333333;
  }

  .card_text_time {
    font-size: 13px;
    line-height: 15.51px;
    color: #666666;
  }

  .card_text_description {
    width: 300px;
    height: 49px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  .card_text_date {
    font-size: 14px;
    line-height: 16.71px;
    color: #333333;
  }
`;

const generateTimeText = (createdAt) => {
  const timeDiff = Math.floor((Date.now() - new Date(createdAt)) / (1000 * 60));

  if (timeDiff < 2) {
    return "1 minute ago";
  }
  if (timeDiff <= 59) {
    return `${timeDiff} minutes ago`;
  }
  if (timeDiff < 60 * 24) {
    const hours = Math.floor(timeDiff / 60);
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if (timeDiff <= 60 * 24 * 30) {
    const days = Math.floor(timeDiff / (60 * 24));
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (timeDiff <= 60 * 24 * 30 * 31) {
    const months = Math.floor(timeDiff / (60 * 24 * 30));
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (timeDiff < 60 * 24 * 30 * 12) {
    const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }

  const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
  const months = Math.floor(years * 12);
  return `${months} months ago`;
};

const formatDate = (createdAtString) => {
  const createdAt = new Date(createdAtString);
  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const day = String(createdAt.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const Card = () => {
  const folderData = useFetchData(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <CardContainer>
      <div className="card_grid_container">
        {folderData &&
          folderData.folder.links.map((link) => (
            <div key={link.id} className="card">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <div className="card_img_div">
                  {link.imageSource ? (
                    <img
                      src={link.imageSource}
                      className="card_img"
                      alt={link.title}
                    />
                  ) : (
                    <img src={noImage} className="card_img" alt="noImage" />
                  )}
                </div>
              </a>
              <div className="card_text">
                <p className="card_text_time">
                  {generateTimeText(link.createdAt)}
                </p>
                <div className="card_text_description">
                  <p>{link.description}</p>
                </div>
                <div className="card_text_date">
                  <p>{formatDate(link.createdAt)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </CardContainer>
  );
};

export default Card;
