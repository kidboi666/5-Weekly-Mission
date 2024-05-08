import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Article from "../Article/Article";
import search_icon from "../../assets/Search.svg";
import share from "../../assets/share.svg";
import pen from "../../assets/pen.svg";
import delete_icon from "../../assets/deleteIcon.svg";
import close_btn from "../../assets/_close.png";
import styles from "./FolderMain.module.css";
import { FolderDataAll, FolderData } from "../../api/parseData";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/baseURL";
import Modal from "../Modal/Modal";

interface Card {
    id: string;
    url: string;
    showStar?: boolean;
    image_source?: string;
    title?: string;
    description?: string;
    created_at: string;
}

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

const ALL_FOLDERS: string = "전체";
const MODAL_TYPES = {
    ADD_FOLDER: "ADD_FOLDER",
    SHARE: "SHARE",
    EDIT: "EDIT",
    DELETE_FOLDER: "DELETE_FOLDER",
} as const;

type ModalType = keyof typeof MODAL_TYPES | null;

function FolderMain() {
    const [activeButton, setActiveButton] = useState<string>(ALL_FOLDERS);
    const [activeButtonId, setActiveButtonId] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [modalType, setModalType] = useState<ModalType>(null);

    const folderList = useFetch(`${BASE_URL}users/1/folders`); // 개별 폴더

    const handleFolderClick = (folderId: string, folderName: string) => {
        setActiveButton(folderName);
        setActiveButtonId(folderId);
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

    // 모달 오픈 시 스크롤 막기
    useEffect(() => {
        if (modalType) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalType]);

    const filteredCards: Card[] =
        activeButtonId === "" ? FolderDataAll() : FolderData(activeButtonId);

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    // 검색어가 있을 때만 필터링
    const filteredCardsBySearchTerm: Card[] = searchTerm
        ? filteredCards.filter((card) => {
              const { url, title, description } = card;
              return (
                  url.includes(searchTerm) ||
                  title!.includes(searchTerm) ||
                  description!.includes(searchTerm)
              );
          })
        : filteredCards;

    return (
        <main className={styles.main}>
            <Article />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <img src={search_icon} width='15' height='15' alt='search_icon' />
                    <input
                        className={styles.search_input}
                        placeholder='링크를 검색해보세요'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <img
                            src={close_btn}
                            className={styles.close_btn}
                            width={24}
                            height={24}
                            alt='close'
                            onClick={handleClearSearch}
                            tabIndex={0}
                        />
                    )}
                </div>
                {searchTerm && (
                    <div className={styles.search_result}>
                        <span className={styles.search_result_keyword}>{`${searchTerm}`}</span>
                        <span className={styles.search_result_txt}>으로 검색한 결과입니다.</span>
                    </div>
                )}

                <div className={styles.main_btn_div}>
                    <ul className={styles.folder_name_list}>
                        <li>
                            <button
                                className={`${styles.folder_btn_lg} ${
                                    activeButton === ALL_FOLDERS && styles.active
                                }`}
                                onClick={() => handleFolderClick("", ALL_FOLDERS)}
                                id='all'
                            >
                                {ALL_FOLDERS}
                            </button>
                        </li>
                        {folderList &&
                            folderList.data.map((folder: Link) => (
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
                        onClick={() => openModal("ADD_FOLDER")}
                    >
                        폴더 추가+
                    </button>
                    {modalType === "ADD_FOLDER" && (
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
                    <p className={styles.active_button}>{activeButton}</p>
                    {activeButton !== "전체" && (
                        <div className={styles.main_sub_nav_side}>
                            <button
                                className={styles.main_sub_nav_side_items}
                                id='shareFolderBtn'
                                onClick={() => openModal("SHARE")}
                            >
                                <img
                                    src={share}
                                    width={18}
                                    height={18}
                                    alt='폴더 공유'
                                    className={styles.icons}
                                />
                                <span className={styles.icon_text}>공유</span>
                            </button>
                            {modalType === "SHARE" && (
                                <Modal
                                    title='폴더 공유'
                                    subtitle={activeButton}
                                    onClose={closeModal}
                                    share
                                    folderId={activeButtonId}
                                />
                            )}
                            <button
                                className={styles.main_sub_nav_side_items}
                                onClick={() => openModal("EDIT")}
                            >
                                <img
                                    src={pen}
                                    width={18}
                                    height={18}
                                    alt='폴더 이름 변경'
                                    className={styles.icons}
                                />
                                <span className={styles.icon_text}>이름 변경</span>
                            </button>
                            {modalType === "EDIT" && (
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
                                onClick={() => openModal("DELETE_FOLDER")}
                            >
                                <img src={delete_icon} width={18} height={18} alt='폴더 삭제' />
                                <span className={styles.icon_text}>삭제</span>
                            </button>
                            {modalType === "DELETE_FOLDER" && (
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
                <Cards items={filteredCardsBySearchTerm} />
            </section>
        </main>
    );
}

export default FolderMain;
