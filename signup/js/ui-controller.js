import {
  validateRegisterConfirmPassword,
  validateRegisterEmail,
  validateRegisterPassword,
} from '../../utils/validate-auth.js'

export function validateAndDisplayEmailError(emailEl, emailErrorEl) {
  const { success, message } = validateRegisterEmail(emailEl.value)
  if (!success) {
    emailErrorEl.textContent = message
    return
  }
}

export function validateAndDisplayPasswordError(passwordEl, passwordErrorEl) {
  const { success, message } = validateRegisterPassword(passwordEl.value)
  if (!success) {
    passwordErrorEl.textContent = message
    return
  }
}

export function validateAndHandleConfirmPassword(
  passwordEl,
  confirmPasswordEl,
  confirmPasswordErrorEl,
) {
  const { success, message } = validateRegisterConfirmPassword(
    passwordEl.value,
    confirmPasswordEl.value,
  )
  if (!success) {
    confirmPasswordErrorEl.textContent = message
    return
  }
  confirmPasswordErrorEl.textContent = ''
}

export function hideInputError(errorElement) {
  errorElement.textContent = ''
}

export function showPassword(passwordEl, eyeOffIcon, eyeOnIcon) {
  passwordEl.setAttribute('type', 'text')
  eyeOnIcon.style.display = 'inline'
  eyeOffIcon.style.display = 'none'
}

export function hidePassword(passwordEl, eyeOffIcon, eyeOnIcon) {
  passwordEl.setAttribute('type', 'password')
  eyeOffIcon.style.display = 'inline'
  eyeOnIcon.style.display = 'none'
}
