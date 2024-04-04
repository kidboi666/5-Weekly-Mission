import addIcon from '../../assets/images/add_icon.svg';
import addIconWhite from '../../assets/images/add_icon_white.svg';
import FolderToolBarButton from './FolderToolBarButton';
import './FolderToolBar.css';

import {
  STYLE_FOLDER_TOOL_BAR_CONTAINER,
  STYLE_FOLDER_TOOL_BUTTONS,
  STYLE_FOLDER_NAME_BUTTONS,
  STYLE_FOLDER_ADD_BUTTON,
  STYLE_FOLDER_NAME_DISPLAY,
  STYLE_FOLDER_NAME_BAR,
  STYLE_UTIL_BUTTONS,
  UTIL_BUTTONS_PROPS,
  STYLE_ADD_ICON,
  STYLE_ADD_ICON_WHITE,
} from './constants';
import UtilButton from './UtilButton';

export default function FolderToolBar({
  folders,
  currentFolderId,
  folderNameOnClick,
}) {
  const currentFolder = folders.find((folder) => folder.id === currentFolderId);
  const currentFolderName = currentFolder.name;

  return (
    <div className={STYLE_FOLDER_TOOL_BAR_CONTAINER}>
      <div className={STYLE_FOLDER_TOOL_BUTTONS}>
        <ul className={STYLE_FOLDER_NAME_BUTTONS}>
          {folders.map((item) => (
            <li key={item.id}>
              <FolderToolBarButton
                onClick={folderNameOnClick}
                id={item.id}
                isFocused={item.id === currentFolderId}
              >
                {item.name}
              </FolderToolBarButton>
            </li>
          ))}
        </ul>

        <button className={STYLE_FOLDER_ADD_BUTTON}>
          <span>폴더 추가</span>
          <img
            src={addIcon}
            alt="폴더 추가 아이콘"
            className={STYLE_ADD_ICON}
          />
          <img
            src={addIconWhite}
            alt="폴더 추가 아이콘"
            className={STYLE_ADD_ICON_WHITE}
          />
        </button>
      </div>
      <div className={STYLE_FOLDER_NAME_BAR}>
        <span className={STYLE_FOLDER_NAME_DISPLAY}>{currentFolderName}</span>
        <ul className={STYLE_UTIL_BUTTONS}>
          {UTIL_BUTTONS_PROPS.map((btn) => (
            <li key={btn.id}>
              {currentFolderId !== 0 && (
                <UtilButton imgSrc={btn.imgSrc} alt={btn.alt}>
                  {btn.btnText}
                </UtilButton>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
