/*이메일 정규식과 비밀번호 정규식*/
const regexPatterns = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

/*email 유효성 검증*/
function validateEmail(email) {
  if (email.length === 0) {
    return { success: false, error: "이메일을 입력해주세요" };
  }

  if (!regexPatterns.email.test(email)) {
    return { success: false, error: "올바른 이메일 주소가 아닙니다" };
  }
  return { success: true, error: null };
}

/*비밀번호 유효성 검증*/
function validatePassword(password) {
  if (password.length === 0) {
    return { success: false, error: "비밀번호를 입력하세요" };
  }

  return { success: true, error: null };
}

/*이메일: test@codeit.com 비밀번호: codeit101의 사용자 등록*/

const users = [{ email: "test@codeit.com", password: "codeit101" }];

function getUserByEmail(email) {
  return users.filter((user) => user.email === email)[0];
}

export {
  regexPatterns,
  getUserByEmail,
  validateEmail,
  validatePassword,
  users,
};
