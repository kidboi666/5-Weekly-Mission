document.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("accessToken");

  // 만약 accessToken이 존재한다면 로그인 또는 회원가입 페이지로의 접근을 막고 "/folder" 페이지로 리다이렉트
  if (
    accessToken &&
    (window.location.pathname === "/signin.html" ||
      window.location.pathname === "/signup.html")
  ) {
    // "/folder" 페이지로 리다이렉트
    window.location.href = "/folder.html";
  }
});
