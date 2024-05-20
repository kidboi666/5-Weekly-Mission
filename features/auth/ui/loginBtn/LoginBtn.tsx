import React, { Dispatch, SetStateAction } from "react";
import styles from "./loginBtn.module.css";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";

interface LoginBtnProps {
  onClick: () => void;
}

const LoginBtn = ({ onClick }: LoginBtnProps) => {
  return (
    <div className={styles.loginBtn}>
      <GradientSkyblueBtn text="로그인" onClick={onClick} />
    </div>
  );
};

export default LoginBtn;
