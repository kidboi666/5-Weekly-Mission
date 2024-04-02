// Main.js
import Cards from "../Cards/Cards";
import Article from "../Article/Article";
import search_icon from "../../assets/Search.svg";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Article />
      <section className={styles.section}>
        <div className={styles.search_div}>
          <img src={search_icon} width="15" height="15" alt="search_icon" />
          <input
            className={styles.search_input}
            placeholder="링크를 검색해보세요"
          />
        </div>
        <Cards />
      </section>
    </main>
  );
}

export default Main;
