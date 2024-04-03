import './FolderToolBar.css';
const STYLE_FOOTER_NAME_BUTTON = 'folder-name-button';
const STYLE_FOCUSED_BUTTON = 'focused-button';

export default function FolderToolBarButton({
  id,
  children,
  onClick,
  isFocused,
}) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <button
      onClick={handleClick}
      className={`${STYLE_FOOTER_NAME_BUTTON} ${
        isFocused ? STYLE_FOCUSED_BUTTON : ''
      }`}
    >
      {children}
    </button>
  );
}
