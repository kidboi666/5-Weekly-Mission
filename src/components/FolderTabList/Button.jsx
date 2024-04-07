import "./Button.css";

function Button({ data, onClickButton, buttonClass }) {
    const { id, name } = data;

    return (
        <button
            className={buttonClass === id ? "select" : ""}
            onClick={() => onClickButton(id, name)}
        >
            {name}
        </button>
    );
}

export default Button;
