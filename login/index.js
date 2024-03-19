import { emailInputEl, passwordInputEl, loginButtonEl } from "./tags.js";
import { validateEmail, validatePassword, clickEnter, clickLoginBtn} from "./validation.js";

emailInputEl.addEventListener("blur", validateEmail);
emailInputEl.addEventListener("keyup",clickEnter);

passwordInputEl.addEventListener("blur",validatePassword);
passwordInputEl.addEventListener("keyup",clickEnter);

loginButtonEl.addEventListener("click", clickLoginBtn);


