import { useFetch } from "../usefetch";
import styles from "./folderlist.module.css";
import addImg from "../assets/add.svg";
import { useState } from "react";
import EtcIcon from "./etcicon";
import CardList from "./cardlist";

function FolderListItem({ children, value, onClick, isActive }) {
  return (
    <button
      className={
        isActive
          ? `${styles.folderItem} ${styles.folderItem__active}`
          : styles.folderItem
      }
      onClick={onClick}
    >
      {children ? children : value}
    </button>
  );
}

function FolderList() {
  const [title, setTitle] = useState("전체");
  const [selectedId, setSelectedId] = useState(null); // 새로운 상태 변수 추가

  const other_folders_url =
    "https://bootcamp-api.codeit.kr/api/users/1/folders";
  const total_folders_url = "https://bootcamp-api.codeit.kr/api/users/1/links";
  const other_folders_links =
    "https://bootcamp-api.codeit.kr/api/users/1/links?folderId={selectedId}";
  const folderData = useFetch(other_folders_url);

  const handleTitle = (itemName, itemId) => {
    setTitle(itemName);
    setSelectedId(itemId); // 선택된 아이템의 ID를 설정
  };

  const handleAll = () => {
    setTitle("전체");
    setSelectedId(null); // 전체 버튼을 클릭할 때 선택된 아이템 ID를 null로 설정
  };

  return (
    <div className={styles.folderLists}>
      <div className={styles.folderList__Container}>
        <div className={styles.folderList}>
          <FolderListItem onClick={handleAll} isActive={selectedId === null}>
            전체
          </FolderListItem>{" "}
          {/* 전체 버튼 */}
          {folderData?.data?.map((item) => {
            return (
              <FolderListItem
                key={item.id}
                value={item.name}
                onClick={() => handleTitle(item.name, item.id)}
                isActive={selectedId === item.id}
              />
            );
          })}
        </div>
        <button className={styles.folderList__plus}>
          <div>폴더추가</div>
          <img src={addImg} alt="십자가 모양 이미지" />
        </button>
      </div>

      <div className={styles.title__container}>
        <div className={styles.title}>{title}</div>
        {title !== "전체" ? <EtcIcon /> : <div></div>}
      </div>
      {title === "전체" ? (
        <CardList url={total_folders_url} />
      ) : (
        <CardList url={other_folders_links}/>
      )}
    </div>
  );
}
export default FolderList;
