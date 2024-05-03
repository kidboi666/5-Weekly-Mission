// Article.jsx
import React from "react";
import { useState } from "react";
import link_icon from "../../assets/link.png";
import styles from "./Article.module.css";
import Modal from "../Modal/Modal";

function Article() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [linkInput, setLinkInput] = useState("");

    const handleOpenModal = () => {
        if (!linkInput.trim()) {
            alert("링크를 입력해주세요.");
            return;
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (linkInput: string) => {
        setLinkInput(""); // 입력값 초기화
        handleCloseModal();
    };

    const handleChange = (e) => {
        setLinkInput(e.target.value);
    };

    if (isModalOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <div className={styles.folder_info_container}>
            <div className={styles.search_div}>
                <img src={link_icon} width={30} height={30} alt='link icon' />
                <input
                    className={styles.search_input}
                    placeholder='링크를 추가해 보세요'
                    value={linkInput}
                    onChange={handleChange}
                />
                <button className={styles.btn} onClick={handleOpenModal}>
                    추가하기
                </button>
                {isModalOpen && (
                    <Modal
                        title='폴더에 추가'
                        subtitle={linkInput}
                        list
                        btnText='추가하기'
                        btnColor='submit'
                        onClose={handleCloseModal}
                        onSubmit={() => handleSubmit(linkInput)}
                    />
                )}
            </div>
        </div>
    );
}

export default Article;
