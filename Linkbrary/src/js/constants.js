import isValidEmail from "./emailValidation";
import { signInSubmit, signUpSubmit } from "./submitFunctions";
import isValidPassword, { isSamePassword } from "./passwordValidation";

const FOCUSOUTFUNCTIONS = {
  "user-email": isValidEmail,
  "password": isValidPassword,
  "password-check": isSamePassword,
};

const SUBMITFUNCTIONS = {
  "sign-in-form": signInSubmit,
  "sign-up-form": signUpSubmit,
};

const EMAIL = "test@codeit.com";
const PASSWORD = "codeit101";

export { FOCUSOUTFUNCTIONS, SUBMITFUNCTIONS, EMAIL, PASSWORD };
