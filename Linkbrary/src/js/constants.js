import isValidEmail from "./emailValidation";
import isValidPassword from "./passwordValidation";

export const focusOutFunctions = {
  "user-email": isValidEmail,
  "password": isValidPassword,
};
