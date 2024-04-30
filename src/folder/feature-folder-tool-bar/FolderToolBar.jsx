import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { FolderButton } from "folder/ui-folder-button";
import { BUTTONS, ALL_LINKS_TEXT, MODALS_ID } from "./constant";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { AddFolderButton } from "folder/ui-add-folder-button/AddFolderButton";
import { useState } from "react";
import { IconAndTextButton } from "sharing/ui-icon-and-text-button";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const [currentModal, setCurrentModal] = useState(null);
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

      <div className={cx("add-button")}>
        <AddFolderButton
          onClick={() => {
            setCurrentModal(MODALS_ID.addFolder);
          }}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      <div className={cx("buttons")}>
        {BUTTONS.map(({ text, iconSource, modalId }) => (
          <IconAndTextButton
            text={text}
            iconSource={iconSource}
            onClick={() => setCurrentModal(modalId)}
          />
        ))}
      </div>
    </div>
  );
};
