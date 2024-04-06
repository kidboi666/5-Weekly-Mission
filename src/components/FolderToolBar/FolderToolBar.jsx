import addIcon from '../../assets/images/add_icon.svg';
import addIconWhite from '../../assets/images/add_icon_white.svg';
import FolderToolBarButton from './FolderToolBarButton';
import './FolderToolBar.css';
import { UTIL_BUTTONS_PROPS } from './constants';
import * as styles from './styles';
import UtilButton from './UtilButton';
import PropTypes from 'prop-types';

export default function FolderToolBar({
  folders,
  currentFolderId,
  folderNameOnClick,
}) {
  const currentFolder = folders.find((folder) => folder.id === currentFolderId);
  const currentFolderName = currentFolder.name;

  return (
    <div className={styles.FOLDER_TOOL_BAR_CONTAINER}>
      <div className={styles.FOLDER_TOOL_BUTTONS}>
        <ul className={styles.FOLDER_NAME_BUTTONS}>
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

        <button className={styles.FOLDER_ADD_BUTTON}>
          <span>폴더 추가</span>
          <img
            src={addIcon}
            alt="폴더 추가 아이콘"
            className={styles.ADD_ICON}
          />
          <img
            src={addIconWhite}
            alt="폴더 추가 아이콘"
            className={styles.ADD_ICON_WHITE}
          />
        </button>
      </div>
      <div className={styles.FOLDER_NAME_BAR}>
        <span className={styles.FOLDER_NAME_DISPLAY}>{currentFolderName}</span>
        <ul className={styles.UTIL_BUTTONS}>
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

FolderToolBar.propTypes = {
  folders: PropTypes.array,
  currentFolderId: PropTypes.number,
  folderNameOnClick: PropTypes.func,
};
