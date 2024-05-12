// SharedMain.jsx
import React from "react";
import Cards from "../Cards/Cards";
import styles from "./SharedMain.module.css";
import { SharedData } from "../../api/parseData";
import FolderInfo from "../FolderInfo/FolderInfo";
import Image from "next/image";

function SharedMain() {
    return (
        <main className={styles.main}>
            <FolderInfo />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <Image src='/assets/Search.svg' width={15} height={15} alt='search_icon' />
                    <input
                        className={`${styles.search_input} input`}
                        placeholder='링크를 검색해보세요'
                    />
                </div>
                <Cards items={SharedData()} />
            </section>
        </main>
    );
}

export default SharedMain;
