import login from '../../action/login.js'
import redirect from '../../utils/redirect-home-page.js'
import {
  validateLoginEmail,
  validateLoginPassword,
} from '../../utils/validate-auth.js'

const emailEl = document.getElementById('signIn-email')
const emailErrorEl = document.getElementById('signIn-email-error')
const passwordEl = document.getElementById('signIn-password')
const passwordErrorEl = document.getElementById('signIn-password-error')

export async function handleSubmit(e) {
  e.preventDefault()
  const email = emailEl.value
  const password = passwordEl.value

  const isValidEmail = validateLoginEmail(email)
  if (!isValidEmail.success) {
    emailErrorEl.textContent = isValidEmail.message
    return
  }

  const isValidPassword = validateLoginPassword(password)

  if (!isValidPassword.success) {
    passwordErrorEl.textContent = isValidPassword.message
    return
  }

  const isLogin = await login({ email, password })

  if (!isLogin.success) {
    emailErrorEl.textContent = isLogin.message
    return
  }

  redirect('/folder')
}
