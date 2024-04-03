import './FolderToolBar.css';
const STYLE_FOOTER_NAME_BUTTON = 'folder-name-button';

export default function FolderToolBarButton({ children }) {
  return <button className={STYLE_FOOTER_NAME_BUTTON}>{children}</button>;
}
