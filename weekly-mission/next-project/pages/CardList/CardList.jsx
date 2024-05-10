import SearchBar from "../Searchbar/Searchbar";
import Folder from "../Folder/Folder";
import useFolderList from "../api/useFolderList";
import { memo } from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
import axios from "@/lib/axios";

const CardList = ({ isFolderPage }) => {
  const folderData = useFolderList();
  if (!folderData || !folderData.folder) return null;

  const folderId = null;

  return (
    <div className={styles.cardlist_wrapper}>
      {isFolderPage ? (
        <Folder folderId={folderId} />
      ) : (
        <>
          <SearchBar />
          <div className={styles.cardlist_container}>
            {folderData.folder.links.map((link) => (
              <Card key={link.id} link={link} isFolderPage={isFolderPage} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(CardList);
