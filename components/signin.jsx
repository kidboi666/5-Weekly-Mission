// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { EmailInput } from "./email";
// import { PasswordInput } from "./password";

// export function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const checkedEmail = email === "test@codeit.com";
//     const checkedPassword = password === "sprint101";

//     if (!checkedEmail) {
//       setEmailError("이메일을 확인해주세요.");
//       return;
//     }

//     if (!checkedPassword) {
//       setPasswordError("비밀번호를 확인해주세요.");
//       return;
//     }

//     const data = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch(
//         "https://bootcamp-api.codeit.kr/api/sign-in",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       if (response.ok) {
//         router.push("/folder");
//       } else {
//         alert("로그인 실패");
//       }
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   return (
//     <form className="input" onSubmit={handleSubmit}>
//       <EmailInput value={email} onChange={setEmail} error={emailError} />
//       <PasswordInput
//         value={password}
//         onChange={setPassword}
//         error={passwordError}
//       />
//       <button type="submit" id="btn" className="signin">
//         로그인
//       </button>
//     </form>
//   );
// }
