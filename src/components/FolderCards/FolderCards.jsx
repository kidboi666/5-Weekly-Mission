import styles from "./FolderCards.module.scss";
import classNames from "classnames/bind";
import { MainSearchBar } from "../MainSearchBar/MainSearchBar";
import { LinkItems } from "../LinkItems/LinkItems";
import { FolderToolBar } from "../FolderToolBar";
import { Cards } from "../Cards/Cards";

const cx = classNames.bind(styles);

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

      <ul className={cx("cards_block")}>
        {items.map((item) => {
          return (
            (folderId === item.folder_id || folderName === "전체") && (
              <Cards key={item.id} item={item} />
            )
          );
        })}
      </ul>
    </div>
  );
};
