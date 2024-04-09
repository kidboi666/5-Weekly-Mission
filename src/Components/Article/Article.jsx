// Article.jsx
import link_icon from "../../assets/link.png";
import styles from "./Article.module.css";

function Article() {
    return (
        <div className={styles.folder_info_container}>
            <div className={styles.search_div}>
                <img src={link_icon} width={30} height={30} />
                <input className={styles.search_input} placeholder="링크를 추가해 보세요" />
                <button className={styles.btn}>추가하기</button>
            </div>
        </div>
    );
}

export default Article;
