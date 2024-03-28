import isLoggedIn from '../../utils/is-logged-in.js'
import redirect from '../../utils/redirect-home-page.js'
import handleSubmit from './handle-submit.js'
import {
  hideInputError,
  hidePassword,
  showPassword,
  validateAndDisplayEmailError,
  validateAndDisplayPasswordError,
  validateAndHandleConfirmPassword,
} from './ui-controller.js'

const checkLoggedIn = isLoggedIn()
if (checkLoggedIn) {
  redirect('/folder')
}

const emailEl = document.getElementById('signup-email')
const emailErrorEl = document.getElementById('signup-emailError')
const passwordEl = document.getElementById('signup-password')
const passwordErrorEl = document.getElementById('signup-passwordError')
const passwordEyeOffIconEl = document.getElementById('eye-off')
const passwordEyeOnIconEl = document.getElementById('eye-on')
const confirmPasswordEyeOffIconEl = document.getElementById('confirm-eye-off')
const confirmPasswordEyeOnIconEl = document.getElementById('confirm-eye-on')
const confirmPasswordEl = document.getElementById('signup-confirm-password')
const confirmPasswordErrorEl = document.getElementById(
  'signup-confirm-password-error',
)
const formEl = document.getElementById('signup-form')

function onDocumentReady() {
  emailEl.addEventListener('focusout', () => {
    validateAndDisplayEmailError(emailEl, emailErrorEl)
  })
  emailEl.addEventListener('focusin', () => {
    hideInputError(emailErrorEl)
  })
  passwordEl.addEventListener('focusout', () => {
    validateAndDisplayPasswordError(passwordEl, passwordErrorEl)
  })
  passwordEl.addEventListener('focusin', () => {
    hideInputError(passwordErrorEl)
  })
  passwordEl.addEventListener('keyup', () => {
    validateAndHandleConfirmPassword(
      passwordEl,
      confirmPasswordEl,
      confirmPasswordErrorEl,
    )
  })
  confirmPasswordEl.addEventListener('keyup', () => {
    validateAndHandleConfirmPassword(
      passwordEl,
      confirmPasswordEl,
      confirmPasswordErrorEl,
    )
  })
  passwordEyeOffIconEl.addEventListener('click', () => {
    showPassword(passwordEl, passwordEyeOffIconEl, passwordEyeOnIconEl)
  })
  passwordEyeOnIconEl.addEventListener('click', () => {
    hidePassword(passwordEl, passwordEyeOffIconEl, passwordEyeOnIconEl)
  })
  confirmPasswordEyeOffIconEl.addEventListener('click', () => {
    showPassword(
      confirmPasswordEl,
      confirmPasswordEyeOffIconEl,
      confirmPasswordEyeOnIconEl,
    )
  })
  confirmPasswordEyeOnIconEl.addEventListener('click', () => {
    hidePassword(
      confirmPasswordEl,
      confirmPasswordEyeOffIconEl,
      confirmPasswordEyeOnIconEl,
    )
  })
  formEl.addEventListener('submit', handleSubmit)
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
