import React from "react";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";
import Modal from "../Modal/Modal";
import Link from "next/link";
import Image from "next/image";

interface Link {
    id: string;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: {
        count: number;
    };
}

interface Card {
    id: string;
    url: string;
    showStar?: boolean;
    image_source?: string;
    title?: string;
    description?: string;
    created_at: string;
}

interface CardsProps {
    items: Card[];
}

function Cards({ items }: CardsProps) {
    const [popoverIndex, setPopoverIndex] = useState<number | null>(null); // 각 카드의 index
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const [modalType, setModalType] = useState<"DELETE_LINK" | "ADD" | null>(null);

    const handleKebabClick = (index: number) => {
        setPopoverIndex(index);
    };

    const handleClosePopover = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
        if (
            popoverIndex !== null &&
            popoverRef.current &&
            !popoverRef.current.contains(e.target as Node)
        ) {
            setPopoverIndex(null);
        }
    };

    const openModal = (type: "DELETE_LINK" | "ADD") => {
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

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalType]);

    const MINUTES = 60;
    const HOURS = 24;
    const DAYS = 30;
    const MONTHS = 12;

    const generateTimeText = (createdAt: string) => {
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
                                    <Image
                                        src='/assets/star_empty.png'
                                        width={34}
                                        height={34}
                                        alt='star'
                                    />
                                </div>
                            )}
                            <Link href={link.url} target='_blank'>
                                <div className={styles.card_img_div}>
                                    {link.image_source ? (
                                        <Image
                                            src={link.image_source}
                                            className={styles.card_img}
                                            alt={link.title || ""}
                                            width={450}
                                            height={350}
                                        />
                                    ) : (
                                        <Image
                                            src='/assets/thumbnail.svg'
                                            className={styles.card_img}
                                            alt='thumbnail'
                                            width={450}
                                            height={350}
                                        />
                                    )}
                                </div>
                            </Link>
                            <div className={styles.card_info}>
                                <div className={styles.card_info_top}>
                                    <p className={`${styles.card_info_time} p`}>
                                        {generateTimeText(link.created_at)}
                                    </p>
                                    <div
                                        className={styles.dot_menu_button}
                                        tabIndex={0}
                                        onClick={() => handleKebabClick(index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                handleKebabClick(index);
                                            }
                                        }}
                                    >
                                        <Image
                                            src='/assets/dot.svg'
                                            alt='dot'
                                            width={21}
                                            height={17}
                                        />
                                    </div>
                                    {popoverIndex === index && (
                                        <div className={styles.popover} ref={popoverRef}>
                                            <div
                                                role='button'
                                                tabIndex={0}
                                                className={styles.popover_content}
                                                onClick={() => openModal("DELETE_LINK")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        openModal("DELETE_LINK");
                                                    }
                                                }}
                                            >
                                                삭제하기
                                            </div>
                                            {modalType === "DELETE_LINK" && (
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
                                                onClick={() => openModal("ADD")}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        openModal("ADD");
                                                    }
                                                }}
                                            >
                                                폴더에 추가
                                            </div>
                                            {modalType === "ADD" && (
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
                                <p className={`${styles.card_info_body} p`}>{link.description}</p>
                                <p className={`${styles.card_info_date} p`}>
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
