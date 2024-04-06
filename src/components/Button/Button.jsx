import PropTypes from 'prop-types';
import './Button.css';

const STYLE_BTN_CLASS_NAME = 'btn';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={STYLE_BTN_CLASS_NAME}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
