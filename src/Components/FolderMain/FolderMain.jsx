import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Article from "../Article/Article";
import search_icon from "../../assets/Search.svg";
import share from "../../assets/share.svg";
import pen from "../../assets/pen.svg";
import delete_icon from "../../assets/deleteIcon.svg";
import styles from "./FolderMain.module.css";
import { FolderDataAll, FolderData } from "../../api/parseData";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import Modal from "../Modal/Modal";

function FolderMain() {
    const [activeButton, setActiveButton] = useState("전체");
    const [activeButtonId, setActiveButtonId] = useState("");
    const folderList = useFetch(`${BASE_URL}users/1/folders`); // 개별 폴더

    const handleFolderClick = (folderId, folderName) => {
        setActiveButton(folderName);
        setActiveButtonId(folderId);
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

    return (
        <main className={styles.main}>
            <Article />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <img src={search_icon} width='15' height='15' alt='search_icon' />
                    <input className={styles.search_input} placeholder='링크를 검색해보세요' />
                </div>
                <div className={styles.main_btn_div}>
                    <ul className={styles.folder_name_list}>
                        <li>
                            <button
                                className={`${styles.folder_btn_lg} ${
                                    activeButton === "전체" && styles.active
                                }`}
                                onClick={() => handleFolderClick("", "전체")}
                                id='all'
                            >
                                전체
                            </button>
                        </li>
                        {folderList &&
                            folderList.data.map((folder) => (
                                <li key={folder.id}>
                                    <button
                                        className={`${styles.folder_btn_lg} ${
                                            activeButton === folder.name && styles.active
                                        }`}
                                        onClick={() => handleFolderClick(folder.id, folder.name)}
                                        id={folder.id}
                                    >
                                        {folder.name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                    <button
                        className={styles.add_folder_btn}
                        id='addFolderBtn'
                        onClick={() => openModal("addFolder")}
                    >
                        폴더 추가+
                    </button>
                    {modalType === "addFolder" && (
                        <Modal
                            title='폴더 추가'
                            input
                            placeholder='내용 입력'
                            btnText='추가하기'
                            btnColor='submit'
                            onClose={closeModal}
                            onSubmit={handleSubmit}
                        />
                    )}
                </div>
                <div className={styles.main_sub_nav}>
                    <p>{activeButton}</p>
                    {activeButton !== "전체" && (
                        <div className={styles.main_sub_nav_side}>
                            <button
                                className={styles.main_sub_nav_side_items}
                                id='shareFolderBtn'
                                onClick={() => openModal("share")}
                            >
                                <img src={share} width={18} height={18} alt='폴더 공유' />
                                공유
                            </button>
                            {modalType === "share" && (
                                <Modal
                                    title='폴더 공유'
                                    subtitle={activeButton}
                                    onClose={closeModal}
                                    share
                                />
                            )}
                            <button
                                className={styles.main_sub_nav_side_items}
                                onClick={() => openModal("edit")}
                            >
                                <img src={pen} width={18} height={18} alt='폴더 이름 변경' />
                                이름 변경
                            </button>
                            {modalType === "edit" && (
                                <Modal
                                    title='폴더 이름 변경'
                                    input
                                    placeholder={activeButton}
                                    btnColor='submit'
                                    btnText='변경하기'
                                    onClose={closeModal}
                                    onSubmit={handleSubmit}
                                />
                            )}
                            <button
                                className={styles.main_sub_nav_side_items}
                                onClick={() => openModal("deleteFolder")}
                            >
                                <img src={delete_icon} width={18} height={18} alt='폴더 삭제' />
                                삭제
                            </button>
                            {modalType === "deleteFolder" && (
                                <Modal
                                    title='폴더 삭제'
                                    subtitle={activeButton}
                                    btnColor='delete'
                                    btnText='삭제하기'
                                    onClose={closeModal}
                                    onSubmit={handleSubmit}
                                />
                            )}
                        </div>
                    )}
                </div>
                <Cards
                    items={activeButtonId === "" ? FolderDataAll() : FolderData(activeButtonId)}
                />
            </section>
        </main>
    );
}

export default FolderMain;
