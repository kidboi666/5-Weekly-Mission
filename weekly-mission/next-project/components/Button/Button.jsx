import styles from "./Button.module.css";

const Button = ({ text, type, onClick }) => {
  const buttonClass =
    type === "primary" ? styles.primary : type === "red" ? styles.red : "";

  return (
    <button
      className={`${styles.StyledButton} ${buttonClass}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
