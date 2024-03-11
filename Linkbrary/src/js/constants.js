import isValidEmail from "./emailValidation";
import { signInSubmit, signUpSubmit } from "./submitFunctions";
import isValidPassword, { isSamePassword } from "./passwordValidation";

export const focusOutFunctions = {
  "user-email": isValidEmail,
  "password": isValidPassword,
  "password-check": isSamePassword,
};

export const submitFunctions = {
  "sign-in-form": signInSubmit,
  "sign-up-form": signUpSubmit,
};
