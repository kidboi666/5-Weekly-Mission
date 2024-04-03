import addIcon from '../../assets/images/add_icon.svg';
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
  DEFAULT_FOLDER_NAME,
} from './constants';
import UtilButton from './UtilButton';

export default function FolderToolBar({
  folders,
  currentFolder = DEFAULT_FOLDER_NAME,
}) {
  return (
    <div className={STYLE_FOLDER_TOOL_BAR_CONTAINER}>
      <div className={STYLE_FOLDER_TOOL_BUTTONS}>
        <ul className={STYLE_FOLDER_NAME_BUTTONS}>
          <li>
            <FolderToolBarButton>전체</FolderToolBarButton>
          </li>
          {folders.map((item) => (
            <li key={item.id}>
              <FolderToolBarButton>{item.name}</FolderToolBarButton>
            </li>
          ))}
        </ul>

        <button className={STYLE_FOLDER_ADD_BUTTON}>
          <span>폴더 추가</span>
          <img src={addIcon} alt="폴더 추가 아이콘" />
        </button>
      </div>
      <div className={STYLE_FOLDER_NAME_BAR}>
        <span className={STYLE_FOLDER_NAME_DISPLAY}>{currentFolder}</span>
        <ul className={STYLE_UTIL_BUTTONS}>
          {UTIL_BUTTONS_PROPS.map((btn) => (
            <li key={btn.id}>
              <UtilButton imgSrc={btn.imgSrc} alt={btn.alt}>
                {btn.btnText}
              </UtilButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
