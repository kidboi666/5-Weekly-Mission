import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import thumbnail from "../../assets/thumbnail.svg";
import dot from "../../assets/dot.svg";
import star from "../../assets/star_empty.png";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";
import Modal from "../Modal/Modal";

function Cards({ items }) {
    const [popoverIndex, setPopoverIndex] = useState(null); // 각 카드의 index
    const popoverRef = useRef(null);

    const handleKebabClick = (index) => {
        setPopoverIndex(index);
    };

    const handleClosePopover = (e) => {
        if (!popoverRef.current) return;

        if (!popoverRef.current.contains(e.target)) {
            setPopoverIndex(null);
        }
    };

    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const handleSubmit = () => {
        closeModal();
    };

    // 모달 오픈 시 스크롤 막기
    useEffect(() => {
        if (modalType) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalType]);

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
                <div className={styles.card_grid_container} onClick={handleClosePopover}>
                    {items.map((link, index) => (
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
                                    <img
                                        src={dot}
                                        className={styles.dot_menu_button}
                                        alt='dot'
                                        tabIndex={0}
                                        onClick={() => handleKebabClick(index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleKebabClick(index);
                                            }
                                        }}
                                    />
                                    {popoverIndex === index && (
                                        <div className={styles.popover} ref={popoverRef}>
                                            <div
                                                role='button'
                                                tabIndex={0}
                                                className={styles.popover_content}
                                                onClick={() => openModal("deleteLink")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        openModal("deleteLink");
                                                    }
                                                }}
                                            >
                                                삭제하기
                                            </div>
                                            {modalType === "deleteLink" && (
                                                <Modal
                                                    title='링크 삭제'
                                                    subtitle={link.url}
                                                    btnColor='delete'
                                                    btnText='삭제하기'
                                                    onClose={closeModal}
                                                    onSubmit={handleSubmit}
                                                />
                                            )}
                                            <div
                                                role='button'
                                                tabIndex={0}
                                                className={styles.popover_content}
                                                onClick={() => openModal("add")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        openModal("add");
                                                    }
                                                }}
                                            >
                                                폴더에 추가
                                            </div>
                                            {modalType === "add" && (
                                                <Modal
                                                    title='폴더에 추가'
                                                    subtitle={link.url}
                                                    list
                                                    btnText='추가하기'
                                                    btnColor='submit'
                                                    onClose={closeModal}
                                                    onSubmit={handleSubmit}
                                                />
                                            )}
                                        </div>
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
