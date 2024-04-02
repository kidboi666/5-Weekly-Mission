// Cards.js
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import { Link } from "react-router-dom";
import moment from "moment";
import thumbnail from "../../assets/thumbnail.svg";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";

function Cards() {
  const folderData = useFetch(`${BASE_URL}folder`);

  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const DAYS_IN_MONTH = 30;
  const MONTHS_IN_YEAR = 12;

  // 시간 차 계산 함수
  const generateTimeText = (createdAt) => {
    const timeDiff = moment().diff(moment(createdAt), "minutes");

    if (timeDiff < 2) {
      return "1 minute ago";
    }
    if (timeDiff <= MINUTES_IN_HOUR - 1) {
      return `${timeDiff} minutes ago`;
    }
    if (timeDiff < MINUTES_IN_HOUR * HOURS_IN_DAY) {
      const hours = Math.floor(timeDiff / MINUTES_IN_HOUR);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }
    if (timeDiff <= MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH) {
      const days = Math.floor(timeDiff / (MINUTES_IN_HOUR * HOURS_IN_DAY));
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    if (
      timeDiff <=
      MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH * MONTHS_IN_YEAR
    ) {
      const months = Math.floor(
        timeDiff / (MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH)
      );
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    const years = Math.floor(
      timeDiff /
        (MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_MONTH * MONTHS_IN_YEAR)
    );
    return years === 1 ? "1 year ago" : `${years} years ago`;
  };

  return (
    <div className={styles.card_grid_container}>
      {folderData &&
        folderData.folder.links.map((link) => (
          <div key={link.id} className={styles.card}>
            <Link to={link.url} target="_blank">
              <div className={styles.card_img_div}>
                {link.imageSource ? (
                  <img
                    src={link.imageSource}
                    className={styles.card_img}
                    alt={link.title}
                    width={450}
                    height={350}
                  />
                ) : (
                  <img
                    src={thumbnail}
                    className={styles.card_img}
                    alt=""
                    width={450}
                    height={350}
                  />
                )}
              </div>
              <div className={styles.card_info}>
                <p className={styles.card_info_top}>
                  {generateTimeText(link.createdAt)}
                </p>
                <p className={styles.card_info_body}>{link.description}</p>
                <p className={styles.card_info_date}>
                  {formatDate(link.createdAt)}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Cards;
