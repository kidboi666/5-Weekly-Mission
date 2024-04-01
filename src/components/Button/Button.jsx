import './Button.css';
const STYLE_BTN_CLASS_NAME = 'btn';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={STYLE_BTN_CLASS_NAME}>
      {children}
    </button>
  );
}
