import { handleFocusIn, handleFocusOut, handleSubmit } from "./eventHandler";

document.addEventListener("focus", handleFocusIn, true);
document.addEventListener("focusout", handleFocusOut);
document.addEventListener("submit", handleSubmit);
