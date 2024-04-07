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

function FolderMain() {
    const [activeButton, setActiveButton] = useState("전체");
    const [activeButtonId, setActiveButtonId] = useState("");
    const folderList = useFetch(`${BASE_URL}users/1/folders`); // 개별 폴더

    const handleFolderClick = (folderId, folderName) => {
        setActiveButton(folderName);
        setActiveButtonId(folderId);
    };

    return (
        <main className={styles.main}>
            <Article />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <img src={search_icon} width="15" height="15" alt="search_icon" />
                    <input className={styles.search_input} placeholder="링크를 검색해보세요" />
                </div>
                <div className={styles.main_btn_div}>
                    <ul className={styles.folder_name_list}>
                        <li>
                            <button
                                className={`${styles.folder_btn_lg} ${
                                    activeButton === "전체" && styles.active
                                }`}
                                onClick={() => handleFolderClick("", "전체")}
                                id="all"
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
                    <button className={styles.add_folder_btn} id="addFolderBtn">
                        폴더 추가+
                    </button>
                </div>
                <div className={styles.main_sub_nav}>
                    <p>{activeButton}</p>
                    {activeButton !== "전체" && (
                        <div className={styles.main_sub_nav_side}>
                            <button className={styles.main_sub_nav_side_items} id="shareFolderBtn">
                                <img src={share} width={18} height={18} alt="폴더 공유" />
                                공유
                            </button>
                            <button className={styles.main_sub_nav_side_items}>
                                <img src={pen} width={18} height={18} alt="폴더 이름 변경" />
                                이름 변경
                            </button>
                            <button className={styles.main_sub_nav_side_items}>
                                <img src={delete_icon} width={18} height={18} alt="폴더 삭제" />
                                삭제
                            </button>
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
