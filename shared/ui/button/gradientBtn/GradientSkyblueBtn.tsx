import React, { MouseEvent } from "react";
import styles from "./gradientSkyblueBtn.module.css";

interface PropsType {
  text: string;
  onClick?: () => void;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.gradientSkyblueBtn}`}>
      {text}
    </button>
  );
};

export default GradientSkyblueBtn;
