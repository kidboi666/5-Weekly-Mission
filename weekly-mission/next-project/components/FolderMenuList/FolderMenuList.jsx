import AllButton from "../AllButton/AllButton";
import styles from "./FolderMenuList.module.css";

const FolderMenuList = ({ folders, activeButton, handleButtonClick }) => {
  if (!Array.isArray(folders) || folders.length === 0) {
    return null; // 폴더가 없거나 유효하지 않은 형태일 경우 렌더링하지 않음
  }

  return (
    <div className={styles.foldermenulist_wrapper}>
      <AllButton
        active={activeButton === null}
        onClick={() => handleButtonClick(null, "전체")}
      />
      {folders.map((folder) => (
        <button
          className={`${styles.foldermenu_toolbar_button} ${
            activeButton === folder.id ? styles.active : ""
          }`}
          key={folder.id}
          onClick={() => handleButtonClick(folder.id, folder.name)}
        >
          {folder.name}
        </button>
      ))}
    </div>
  );
};

export default FolderMenuList;
