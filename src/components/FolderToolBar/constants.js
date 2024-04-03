import shareIcon from '../../assets/images/share_icon.svg';
import penIcon from '../../assets/images/pen_icon.svg';
import deleteIcon from '../../assets/images/delete_icon.svg';

const STYLE_FOLDER_TOOL_BAR_CONTAINER = 'folder-tool-bar-container';
const STYLE_FOLDER_TOOL_BUTTONS = 'folder-tool-buttons';
const STYLE_FOLDER_NAME_BUTTONS = 'folder-name-buttons';
const STYLE_FOLDER_ADD_BUTTON = 'folder-add-button';
const STYLE_FOLDER_NAME_DISPLAY = 'folder-name-display';
const STYLE_FOLDER_NAME_BAR = 'folder-name-bar';
const STYLE_UTIL_BUTTONS = 'util-buttons';
const STYLE_UTIL_BUTTON = 'util-button';

const DEFAULT_FOLDER_NAME = '전체';

const UTIL_BUTTONS_PROPS = [
  {
    imgSrc: shareIcon,
    btnText: '공유',
    alt: '공유 아이콘',
    id: 1,
  },

  {
    imgSrc: penIcon,
    btnText: '이름 변경',
    alt: '이름 변경 아이콘',
    id: 2,
  },
  {
    imgSrc: deleteIcon,
    btnText: '삭제',
    alt: '삭제 아이콘',
    id: 3,
  },
];

export {
  STYLE_FOLDER_TOOL_BAR_CONTAINER,
  STYLE_FOLDER_TOOL_BUTTONS,
  STYLE_FOLDER_NAME_BUTTONS,
  STYLE_FOLDER_ADD_BUTTON,
  STYLE_FOLDER_NAME_DISPLAY,
  STYLE_FOLDER_NAME_BAR,
  STYLE_UTIL_BUTTONS,
  STYLE_UTIL_BUTTON,
  UTIL_BUTTONS_PROPS,
  DEFAULT_FOLDER_NAME,
};
