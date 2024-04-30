// SharedMain.jsx
import Cards from "../Cards/Cards";
import search_icon from "../../assets/Search.svg";
import styles from "./SharedMain.module.css";
import { SharedData } from "../../api/parseData";
import FolderInfo from "../FolderInfo/FolderInfo";

function SharedMain() {
    return (
        <main className={styles.main}>
            <FolderInfo />
            <section className={styles.section}>
                <div className={styles.search_div}>
                    <img src={search_icon} width={15} height={15} alt="search_icon" />
                    <input className={styles.search_input} placeholder="링크를 검색해보세요" />
                </div>
                <Cards items={SharedData()} />
            </section>
        </main>
    );
}

export default SharedMain;
