import React, { Dispatch, SetStateAction } from "react";
import styles from "./signupBtn.module.css";
import { signup } from "../../model/signup";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";

interface SignupBtnProps {
  onClickSignup: () => void;
}

const SignupBtn = ({ onClickSignup }: SignupBtnProps) => {
  return (
    <div className={styles.loginBtn}>
      <GradientSkyblueBtn text="회원가입" onClick={onClickSignup} />
    </div>
  );
};

export default SignupBtn;
