import register from '../../action/register.js'
import redirect from '../../utils/redirect-home-page.js'
import {
  validateRegisterConfirmPassword,
  validateRegisterEmail,
  validateRegisterPassword,
} from '../../utils/validate-auth.js'

const emailEl = document.getElementById('signup-email')
const emailErrorEl = document.getElementById('signup-emailError')
const passwordEl = document.getElementById('signup-password')
const passwordErrorEl = document.getElementById('signup-passwordError')
const confirmPasswordEl = document.getElementById('signup-confirm-password')
const confirmPasswordErrorEl = document.getElementById(
  'signup-confirm-password-error',
)

export default async function handleSubmit(e) {
  e.preventDefault()

  const isValidEmail = validateRegisterEmail(emailEl.value)

  if (!isValidEmail.success) {
    emailErrorEl.textContent = isValidEmail.message
    return
  }

  const isValidPassword = validateRegisterPassword(passwordEl.value)

  if (!isValidPassword.success) {
    passwordErrorEl.textContent = isValidPassword.message
    return
  }

  const isValidConfirmPassword = validateRegisterConfirmPassword(
    passwordEl.value,
    confirmPasswordEl.value,
  )

  if (!isValidConfirmPassword.success) {
    confirmPasswordErrorEl.textContent = isValidConfirmPassword.message
    return
  }

  const email = emailEl.value
  const password = passwordEl.value

  const isRegistered = await register({ email, password })
  if (!isRegistered.success) {
    emailErrorEl.textContent = isRegistered.message
    return
  }
  redirect('/folder')
}
