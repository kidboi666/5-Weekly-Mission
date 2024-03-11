import isValidEmail from "./emailValidation";
import { signInSubmit, signUpSubmit } from "./eventHandler";
import isValidPassword from "./passwordValidation";

export const focusOutFunctions = {
  "user-email": isValidEmail,
  "password": isValidPassword,
};

export const submitFunctions = {
  "sign-in-form": signInSubmit,
  "sign-up-form": signUpSubmit,
};
