import './FolderToolBar.css';
import { UTIL_BUTTON } from './styles';

export default function UtilButton({ imgSrc, children, onClick, alt }) {
  return (
    <button className={UTIL_BUTTON} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      {children}
    </button>
  );
}
