import './FolderToolBar.css';
import PropTypes from 'prop-types';
import { UTIL_BUTTON } from './styles';

export default function UtilButton({ imgSrc, children, onClick, alt }) {
  return (
    <button className={UTIL_BUTTON} onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      {children}
    </button>
  );
}

UtilButton.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
