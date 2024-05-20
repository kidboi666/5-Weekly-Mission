import React from "react";
import styles from "./AllButton.module.css";

interface AllButtonProps {
  active: boolean;
  onClick: () => void;
}

const AllButton = ({ active, onClick }: AllButtonProps) => {
  return (
    <button
      className={`${styles.allbutton} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      전체
    </button>
  );
};

export default AllButton;
