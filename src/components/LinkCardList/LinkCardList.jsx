import FolderToolBar from '../FolderToolBar/FolderToolBar';
import LinkCard from '../LinkCard/LinkCard';
import SearchBar from '../SearchBar/SearchBar';
import './LinkCardList.css';

const STYLE_LINK_CARD_LIST_CONTAINER_CLASS_NAME = 'link-card-list-container';
const STYLE_LINK_CARD_LIST_CLASS_NAME = 'link-card-list';
const STYLE_CONTENT_WRAPPER_CLASS_NAME = 'content-wrapper';
const STYLE_NO_SAVED_LINK = 'no-saved-link';

const NO_SAVED_LINK_MSG = '저장된 링크가 없습니다';

export default function LinkCardList({
  items,
  searchOnSubmit,
  folders,
  folderNameOnClick,
  currentFolderId,
}) {
  return (
    <div className={STYLE_LINK_CARD_LIST_CONTAINER_CLASS_NAME}>
      <div className={STYLE_CONTENT_WRAPPER_CLASS_NAME}>
        <SearchBar onSubmit={searchOnSubmit} />
        {folders && (
          <FolderToolBar
            folders={folders}
            folderNameOnClick={folderNameOnClick}
            currentFolderId={currentFolderId}
          />
        )}

        {items.length > 0 ? (
          <ul className={STYLE_LINK_CARD_LIST_CLASS_NAME}>
            {items.map((item) => (
              <li key={item.id}>
                <LinkCard linkCardInfo={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={STYLE_NO_SAVED_LINK}>{NO_SAVED_LINK_MSG}</p>
        )}
      </div>
    </div>
  );
}
