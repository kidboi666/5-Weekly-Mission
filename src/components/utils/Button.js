import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ text, className = "", link }) {
  return (
    <button className={`btn ${className}`}>
      {link && <Link to={link}>{text}</Link>}
      {!link && { text }}
    </button>
  );
}
