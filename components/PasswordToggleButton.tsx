import visible from "@/public/eye-on.svg";
import hidden from "@/public/eye-off.svg";
import Image from "next/image";
import styles from "./PasswordToggleButton.module.css";
import { MouseEventHandler } from "react";

interface passwordToggleButtonProps {
  passwordType: string;
  handlePasswordType: () => void;
}

function PasswordToggleButton({
  passwordType,
  handlePasswordType,
}: passwordToggleButtonProps) {
  return (
    <button
      onClick={handlePasswordType}
      className={styles.PasswordToggleButton}
    >
      <Image
        src={passwordType === "password" ? hidden : visible}
        alt={
          passwordType === "password" ? "비밀번호 보이기" : "비밀번호 숨기기"
        }
      />
    </button>
  );
}

export default PasswordToggleButton;
