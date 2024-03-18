import isValidEmail from "./emailValidation";
import { signInSubmit, signUpSubmit } from "./submitFunctions";
import isValidPassword, { isSamePassword } from "./passwordValidation";

const FOCUS_OUT_FUNCTIONS = {
  "user-email": isValidEmail,
  "password": isValidPassword,
  "password-check": isSamePassword,
};

const SUBMIT_FUNCTIONS = {
  "sign-in-form": signInSubmit,
  "sign-up-form": signUpSubmit,
};

const EMAIL = "test@codeit.com";
const PASSWORD = "codeit101";

export { FOCUS_OUT_FUNCTIONS, SUBMIT_FUNCTIONS, EMAIL, PASSWORD };
