import styles from "./AllButton.module.css";

const AllButton = ({ active, onClick }) => {
  return (
    <button
      className={`${styles.allbutton} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      전체
    </button>
  );
};

export default AllButton;
