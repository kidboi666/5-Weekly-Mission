import styles from "./FolderCards.module.scss";
import classNames from "classnames/bind";
import { MainSearchBar, LinkItems, FolderToolBar, Cards } from "..";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

export const FolderCards = ({
  links,
  folders,
  folderName,
  setFolderName,
  folderId,
  setFolderId,
  search,
}) => {
  // const [cards, setCards] = useState(false);

  return (
    <div className={cx("container")}>
      <MainSearchBar />

      <FolderToolBar
        folders={folders}
        folderName={folderName}
        setFolderName={setFolderName}
        setFolderId={setFolderId}
      />

      <LinkItems folderName={folderName} />

      {/* <ul className={cx("cards-block")}>
        {links.map((item) => {
          if (folderId === item.folder_id || folderName === "전체") {
         
            return <Cards key={item.id} item={item} folders={folders} />;
          } else {
            return null;
          }
        })}
      </ul> */}

      {/* {!cards && ( */}
        <div className={cx("text-block")}>
          <p className={cx("text")}>저장된 링크가 없습니다</p>
        </div>
      {/* )} */}
    </div>
  );
};
