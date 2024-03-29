import { useFetch } from ".././hooks/useFetch";
import { Link } from "react-router-dom";
import moment from "moment";
import thumbnail from "../.././assets/thumbnail.svg";

function Cards() {
  const folderData = useFetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  // 날짜 형식을 변경하는 함수
  const formatDate = (dateString) => {
    const date = moment(dateString);
    return date.format("YYYY.MM.DD");
  };

  // 폴더 업로드 시간에 따른 표현식 구현 함수
  const generateTimeText = (createdAt) => {
    const timeDiff = moment().diff(moment(createdAt), "minutes");

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
    const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
    return years === 1 ? "1 year ago" : `${years} years ago`;
  };

  return (
    <div className="card_grid_container">
      {folderData &&
        folderData.folder.links.map((link) => (
          <div key={link.id} className="card">
            <div className="card_img_div">
              {link.imageSource ? (
                <img
                  src={link.imageSource}
                  className="card_img"
                  alt={link.title}
                />
              ) : (
                <img src={thumbnail} className="card_img" alt="thumbnail_img" />
              )}
            </div>
            <div className="card_txt_div">
              <div className="card_txt_div_top">
                <p className="left_time_p">
                  {generateTimeText(link.createdAt)}
                </p>
              </div>
              <div className="card_txt_div_body">
                <p className="card_txt_div_body">{link.description}</p>
              </div>
              <div className="card_txt_date">{formatDate(link.createdAt)}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
