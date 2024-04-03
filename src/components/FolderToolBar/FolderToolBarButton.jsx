import './FolderToolBar.css';
const STYLE_FOOTER_TOOL_BUTTON = 'folder-tool-button';

export default function FolderToolBarButton({ children }) {
  return <button className={STYLE_FOOTER_TOOL_BUTTON}>{children}</button>;
}
