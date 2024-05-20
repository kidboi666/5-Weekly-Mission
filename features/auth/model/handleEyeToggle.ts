import { Dispatch, SetStateAction } from "react";

export const handleEyeToggle = (
  setEyeToggle: Dispatch<SetStateAction<boolean>>,
) => {
  setEyeToggle((prev) => !prev);
};
