import React from "react";
import "./Button.css";

export default function Button({ text, className = "", link }) {
  return (
    <button className={`btn ${className}`}>
      {link && <a href={link}>{text}</a>}
      {!link && { text }}
    </button>
  );
}
