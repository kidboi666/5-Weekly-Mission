import styled from 'styled-components';
import noImage from '../asset/noImage.png';
import star from '../asset/star.svg';
import kebabImg from '../asset/kebab.png';

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 16px 12px;

  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 340px;
  height: 335px;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  position: relative;

  &:hover .FolderImage_img {
    transform: scale(1.3);
    transition: transform 200ms;
  }

  &:hover ${CardInfo} {
    background-color: #f0f6ff;
    transition: all 200ms;
  }
`;

const FolderImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  & .FolderImage_img {
    object-fit: cover;
    transform: scale(1);
    transition: transform 200ms;
  }
`;

const LongAgo = styled.span`
  color: #666;
  font-size: 13px;
`;

const Title = styled.strong`
  font-size: 18px;
  height: 19px;
  font-weight: bold;
`;

const Info = styled.p`
  height: 17px;
`;

const CreatedAt = styled.time`
  color: #333;
  font-size: 14px;
`;

const Star = styled.button`
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 291px;
`;

const KebabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonImgs = styled.img`
  display: inline-block;
  vertical-align: top;
`;

function Card({ item }) {
  const {
    createdAt: cReatedAt,
    created_at,
    title,
    description,
    imageSource,
    image_source,
    url,
  } = item;

  const createdAt = cReatedAt ?? created_at;
  const bg = imageSource ?? image_source;

  const uploadDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  function longAgo(value) {
    const date = new Date(value);
    const now = new Date();
    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 31 * DAY;
    const YEAR = 12 * MONTH;

    const time = now - date;

    if (time < 120000) return '1 minute ago';
    if (time < HOUR) {
      const minutes = parseInt(time / MINUTE);
      return `${minutes} minute ago`;
    }
    if (time < 2 * HOUR) return '1 hour ago';
    if (time < DAY) {
      const hours = parseInt(time / HOUR);
      return `${hours} hours ago`;
    }
    if (time < 2 * DAY) return '1 day ago';
    if (time < MONTH) {
      const days = parseInt(time / DAY);
      return `${days} days ago`;
    }
    if (time < 2 * MONTH) return '1 month ago';
    if (time < YEAR) {
      const months = parseInt(time / MONTH);
      return `${months} months ago`;
    }
    if (time < 2 * YEAR) return '1 year ago';
    const years = parseInt(time / YEAR);
    return `${years} years ago`;
  }

  const handleStar = (e) => {
    console.log(e.target);
  };

  return (
    <Frame>
      <Star onClick={handleStar} type="button">
        <ButtonImgs src={star} alt="즐겨찾기" height={34} width={34} />
      </Star>
      <a href={url} target="blank">
        <FolderImage>
          {bg ? (
            <img
              className="FolderImage_img"
              src={bg}
              alt=""
              height={200}
              width={340}
            />
          ) : (
            <img
              className="FolderImage_img"
              src={noImage}
              alt=""
              height={200}
              width={340}
            />
          )}
        </FolderImage>
        <CardInfo>
          <KebabContainer>
            <LongAgo>{longAgo(createdAt)}</LongAgo>
            <button>
              <ButtonImgs src={kebabImg} alt="더보기" height={17} width={21} />
            </button>
          </KebabContainer>
          <Title>{title}</Title>
          <Info>{description}</Info>
          <CreatedAt dateTime={createdAt}>{uploadDate(createdAt)}</CreatedAt>
        </CardInfo>
      </a>
    </Frame>
  );
}

export default Card;
