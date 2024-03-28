const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export function validateLoginEmail(email) {
  if (email === '') {
    return { success: false, message: '이메일 주소를 입력해 주세요.' }
  }
  if (!emailRegex.test(email)) {
    return { success: false, message: '올바른 이메일 주소가 아닙니다.' }
  }
  return { success: true, message: '' }
}

export function validateLoginPassword(password) {
  if (password === '') {
    return { success: false, message: '패스워드를 입력해 주세요.' }
  }
  return { success: true, message: '' }
}

export function validateRegisterEmail(email) {
  if (email === '') {
    return { success: false, message: '이메일 주소를 입력해 주세요.' }
  }
  if (!emailRegex.test(email)) {
    return { success: false, message: '올바른 이메일 주소가 아닙니다.' }
  }
  if (email === 'test@codeit.com') {
    return { success: false, message: '이미 사용중인 이메일입니다.' }
  }
  return { success: true, message: '' }
}

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

export function validateRegisterPassword(password) {
  if (password === '') {
    return { success: false, message: '패스워드를 입력해 주세요.' }
  }
  if (!passwordRegex.test(password)) {
    return {
      success: false,
      message: '비밀번호는 영문과 숫자 조합 8자 이상 입력해 주세요.',
    }
  }
  return { success: true, message: '' }
}

export function validateRegisterConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return { success: false, message: '비밀번호가 일치하지 않아요.' }
  }
  return { success: true, message: '' }
}
