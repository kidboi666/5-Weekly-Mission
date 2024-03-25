const eyeImage = document.querySelector(".eye-change");
// const confirmEyeImage = document.querySelector("#confirm-eye-change");
import { inputPassword } from "./reset.js";

// 비밀번호
export function togglePassword(e) {
  const testTarget = e.target;
  console.log(testTarget.type);

  testTarget.classList.toggle("eye-on");

  if (testTarget.type === "password") {
    testTarget.type = "text";
  } else {
    testTarget.type = "password";
  }
}

// 비밀번호 확인
// export function confirmEyeToggle() {
//   confirmEyeImage.classList.toggle("eye-on");

//   if (inputPasswordConfirm.type === "password") {
//     inputPasswordConfirm.type = "text";
//   } else {
//     inputPasswordConfirm.type = "password";
//   }
// }

// 이해 필요
// export function togglePasswordVisibility(inputElement, imageElement) {
//   const isPassword = inputElement.type === "password";
//   inputElement.type = isPassword ? "text" : "password";
//   imageElement.classList.toggle("eye-on", isPassword);
// }
