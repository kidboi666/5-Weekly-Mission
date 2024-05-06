import React from "react";
import "./Button.css";

interface buttonData {
  data: {
    id: number;
    name: string;
  };
  onClickButton: (id: number, name: string) => void;
  buttonClass: number | null;
}

function Button({ data, onClickButton, buttonClass }: buttonData) {
  const { id, name } = data;

  return (
    <button className={buttonClass === id ? "select" : ""} onClick={() => onClickButton(id, name)}>
      {name}
    </button>
  );
}

export default Button;
