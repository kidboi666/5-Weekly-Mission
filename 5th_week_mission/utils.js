const emailRegrex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

//이메일 검사
export function validateEmail(email){
  return new RegExp(emailRegrex).test(email);
}


// 비밀번호 input 이벤트 핸들러
export  function togglePassword(input, toggleButton) {
  input.classList.toggle("eye-button-off");
  const type = toggleButton.getAttribute("type") 
  === "password" ? "text" : "password" ;
  toggleButton.setAttribute("type", type);
};

export const testUser = {
  email: "test@codeit.com",
  password: "codeit101",
};
