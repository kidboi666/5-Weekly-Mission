import { Link } from "react-router-dom";
import moment from "moment";
import thumbnail from "../../assets/thumbnail.svg";
import dot from "../../assets/dot.svg";
import star from "../../assets/star_empty.png";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";

function Cards({ items }) {
    const MINUTES = 60;
    const HOURS = 24;
    const DAYS = 30;
    const MONTHS = 12;

    const generateTimeText = (createdAt) => {
        const timeDiff = moment().diff(moment(createdAt), "minutes");

        if (timeDiff < 2) {
            return "1 minute ago";
        }
        if (timeDiff <= MINUTES - 1) {
            return `${timeDiff} minutes ago`;
        }
        if (timeDiff < MINUTES * HOURS) {
            const hours = Math.floor(timeDiff / MINUTES);
            return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
        }
        if (timeDiff <= MINUTES * HOURS * DAYS) {
            const days = Math.floor(timeDiff / (MINUTES * HOURS));
            return days === 1 ? "1 day ago" : `${days} days ago`;
        }
        if (timeDiff <= MINUTES * HOURS * DAYS * MONTHS) {
            const months = Math.floor(timeDiff / (MINUTES * HOURS * DAYS));
            return months === 1 ? "1 month ago" : `${months} months ago`;
        }
        const years = Math.floor(timeDiff / (MINUTES * HOURS * DAYS * MONTHS));
        return years === 1 ? "1 year ago" : `${years} years ago`;
    };

    return (
        <>
            {items && items.length > 0 ? (
                <div className={styles.card_grid_container}>
                    {items.map((link) => (
                        <div key={link.id} className={styles.card}>
                            <Link to={link.url} target="_blank">
                                {link.showStar && (
                                    <div className={styles.star}>
                                        <img src={star} width={34} height={34} alt="star" />
                                    </div>
                                )}
                                <div className={styles.card_img_div}>
                                    {link.image_source ? (
                                        <img
                                            src={link.image_source}
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
                                    <div className={styles.card_info_top}>
                                        <p className={styles.card_info_time}>
                                            {generateTimeText(link.created_at)}
                                        </p>
                                        {link.showDot && (
                                            <img
                                                src={dot}
                                                className={styles.dot_menu_button}
                                                alt="dot"
                                            />
                                        )}
                                    </div>
                                    <p className={styles.card_info_body}>{link.description}</p>
                                    <p className={styles.card_info_date}>
                                        {formatDate(link.created_at)}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.no_links_message}>저장된 링크가 없습니다.</div>
            )}
        </>
    );
}

export default Cards;
