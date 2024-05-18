import { ReactNode } from "react";

interface IAuthIconButton {
  showPassword: boolean;
  ToggleShowHideIcon: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset";
}

function AuthIconButton({ showPassword, ToggleShowHideIcon, type, children }: IAuthIconButton) {
  return (
    <button
      type={type}
      className={`inputIcon ${showPassword ? "on" : "off"}`}
      onClick={ToggleShowHideIcon}
    >
      {children}
    </button>
  );
}

export default AuthIconButton;
