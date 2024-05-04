import styles from "./FolderCards.module.scss";
import classNames from "classnames/bind";
import { MainSearchBar } from "../MainSearchBar/MainSearchBar";
import { LinkItems } from "../LinkItems/LinkItems";
import { FolderToolBar } from "../FolderToolBar";
import { Cards } from "../Cards/Cards";

const cx = classNames.bind(styles);

let hasCards = false;

export const FolderCards = ({
  items,
  folders,
  folderName,
  setFolderName,
  folderId,
  setFolderId,
}) => {
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

      <ul className={cx("cards-block")}>
        {items.map((item) => {
          if (folderId === item.folder_id || folderName === "전체") {
            hasCards = true;
            return <Cards key={item.id} item={item} />;
          }
        })}
      </ul>

      {!hasCards && (
        <div className={cx("text-container")}>
          <p className={cx("text")}>저장된 링크가 없습니다</p>
        </div>
      )}
    </div>
  );
};
