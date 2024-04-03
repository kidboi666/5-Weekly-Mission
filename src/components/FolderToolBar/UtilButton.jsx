import './FolderToolBar.css';
import { STYLE_UTIL_BUTTON } from './constants';

export default function UtilButton({ imgSrc, children, onClick, alt }) {
  return (
    <button className={STYLE_UTIL_BUTTON} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      {children}
    </button>
  );
}
