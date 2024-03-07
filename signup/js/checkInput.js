import { InputType } from '/type.js'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function setError(input, error, errorMessage) {
  error.textContent = errorMessage
  input.style.border = '2px solid red'
}

function clearError(input, error) {
  error.textContent = ''
  input.style.border = '1px var(--gray-400) solid'
}

function checkEmpty(input, error, errorMessage) {
  if (input.value.trim() === '') {
    setError(input, error, errorMessage)
    return true
  }
  return false
}

export default function checkInput(inputId, errorId, type) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(errorId)

  switch (type) {
    case InputType.EMAIL:
      if (checkEmpty(input, error, '이메일을 입력해 주세요.')) return
      if (!emailRegex.test(input.value.trim())) {
        setError(input, error, '올바른 이메일 주소가 아닙니다.')
        return
      }
      clearError(input, error)
      break

    case InputType.PASSWORD:
      const passwordConfirmInput = document.getElementById(
        'signup-passwordConfirm',
      )
      const passwordConfirmError = document.getElementById(
        'signup-passwordConfirmError',
      )

      if (checkEmpty(input, error, '비밀번호를 입력해 주세요.')) return
      if (
        passwordConfirmInput.value.trim() !== '' &&
        input.value.trim() !== passwordConfirmInput.value.trim()
      ) {
        setError(input, error, '비밀번호가 일치하지 않습니다.')
        return
      }

      clearError(input, error)
      clearError(passwordConfirmInput, passwordConfirmError)
      break

    case InputType.PASSWORD_CONFIRM:
      const passwordInput = document.getElementById('signup-password')
      if (checkEmpty(input, error, '비밀번호 확인을 입력해 주세요.')) return
      if (input.value.trim() !== passwordInput.value.trim()) {
        setError(input, error, '비밀번호가 일치하지 않습니다.')
        return
      }
      clearError(input, error)
      break

    default:
      break
  }
}