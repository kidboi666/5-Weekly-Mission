import React, { useState, useRef } from "react";
import formatDate from "../../utils/formatDate";
import styles from "./Cards.module.css";
import Modal from "../Modal/Modal";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../../types/interface";
import generateTimeText from "../../utils/generateTimeText";
import useModalScrollLock from "../../hooks/useModalScrollLock";
import { ModalType } from "../../types/type";

interface CardsProps {
    items: Card[];
}

function Cards({ items }: CardsProps) {
    const [activePopoverIndex, setActivePopoverIndex] = useState<number | null>(null);
    const [modalType, setModalType] = useState<ModalType | null>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const openPopover = (index: number) => {
        setActivePopoverIndex(index);
    };

    const closePopover = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
        if (
            activePopoverIndex !== null &&
            popoverRef.current &&
            !popoverRef.current.contains(e.target as Node)
        ) {
            setActivePopoverIndex(null);
        }
    };

    const openModal = (type: ModalType) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const handleSubmit = () => {
        closeModal();
    };

    useModalScrollLock(modalType);

    return (
        <>
            {items && items.length > 0 ? (
                <div className={styles.card_grid_container} onClick={closePopover}>
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
                                        onClick={() => openPopover(index)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                openPopover(index);
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
                                    {activePopoverIndex === index && (
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
