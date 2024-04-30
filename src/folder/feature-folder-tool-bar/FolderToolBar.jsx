import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { FolderButton } from "folder/ui-folder-button";
import { ALL_LINKS_TEXT } from "./constant";
import { ALL_LINKS_ID } from "link/data-access-link/constant";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}></div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
    </div>
  );
};
