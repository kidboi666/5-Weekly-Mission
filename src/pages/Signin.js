import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import { signinRequest } from "../api/appAip";

// const [user, setUser] = useState({
//   email: "",
//   password: "",
// });

const handleSubmit = (event) => {
  event.preventDefault();

  const $userEmail = event.target.email;
  const $userPassword = event.target.password;

  const userEmail = $userEmail.value;
  const userPassword = $userPassword.value;

  signinRequest(userEmail, userPassword);
  handleUser();
};

const handleUser = async () => {
  const userData = await signinRequest();
  console.log(userData);
  // TestLoginData(userData);
};

function Signin() {
  return (
    <>
      <Link to="/" style={{ display: "flex" }}>
        <img src={logoImg} alt="로고 이미지 Linkbrary" />
      </Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">이메일</label>
        <input type="email" name="email" />
        <label htmlFor="input-pw">비밀번호</label>
        <input type="password" name="password" />
        <button type="button">비밀번호 감추기 버튼 이미지 추가</button>
        <button type="submit">로그인</button>
      </form>

      <div>
        <p>테스트</p>
        <p>test@codeit.com</p>
        <p>sprint101</p>
      </div>
    </>
  );
}

export default Signin;
