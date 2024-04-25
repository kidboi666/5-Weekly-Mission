import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import thumbnail from "../../assets/thumbnail.svg";
import dot from "../../assets/dot.svg";
import star from "../../assets/star_empty.png";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

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
                            {link.showStar && (
                                <div className={styles.star}>
                                    <img src={star} width={34} height={34} alt='star' />
                                </div>
                            )}
                            <Link to={link.url} target='_blank'>
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
                                            alt=''
                                            width={450}
                                            height={350}
                                        />
                                    )}
                                </div>
                            </Link>
                            <div className={styles.card_info}>
                                <div className={styles.card_info_top}>
                                    <p className={styles.card_info_time}>
                                        {generateTimeText(link.created_at)}
                                    </p>
                                    {link.showDot && (
                                        <>
                                            <img
                                                src={dot}
                                                className={styles.dot_menu_button}
                                                alt='dot'
                                                data-tooltip-id='tooltip'
                                            />
                                            <Tooltip
                                                id='tooltip'
                                                clickable
                                                tooltipOptions={{ position: "bottom" }}
                                                className={styles.modal}
                                            >
                                                <div role='button' className={styles.modal_content}>
                                                    삭제하기
                                                </div>
                                                <div role='button' className={styles.modal_content}>
                                                    폴더에 추가
                                                </div>
                                            </Tooltip>
                                        </>
                                    )}
                                </div>
                                <Link to={link.url} target='_blank'>
                                    <p className={styles.card_info_body}>{link.description}</p>
                                </Link>
                                <p className={styles.card_info_date}>
                                    {formatDate(link.created_at)}
                                </p>
                            </div>
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
