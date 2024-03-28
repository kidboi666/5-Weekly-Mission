import isLoggedIn from '../../utils/is-logged-in.js'
import redirect from '../../utils/redirect-home-page.js'
import { handleSubmit } from './handle-submit.js'
import {
  hideInputError,
  hidePassword,
  showPassword,
  validateAndDisplayEmailError,
  validateAndDisplayPasswordError,
} from './ui-controller.js'

const checkLoggedIn = isLoggedIn()
if (checkLoggedIn) {
  redirect('/folder')
}

const emailEl = document.getElementById('signIn-email')
const emailErrorEl = document.getElementById('signIn-email-error')
const passwordEl = document.getElementById('signIn-password')
const passwordErrorEl = document.getElementById('signIn-password-error')
const formEl = document.getElementById('signIn-form')
const eyeOffIconEl = document.getElementById('eye-off')
const eyeOnIconEl = document.getElementById('eye-on')

function onDocumentReady() {
  emailEl.addEventListener('focusin', () => {
    hideInputError(emailEl, emailErrorEl)
  })
  emailEl.addEventListener('focusout', () => {
    validateAndDisplayEmailError(emailEl, emailErrorEl)
  })
  passwordEl.addEventListener('focusout', () => {
    validateAndDisplayPasswordError(passwordEl, passwordErrorEl)
  })
  passwordEl.addEventListener('focusin', () => {
    hideInputError(passwordEl, passwordErrorEl)
  })
  eyeOffIconEl.addEventListener('click', () => {
    showPassword(passwordEl, eyeOffIconEl, eyeOnIconEl)
  })
  eyeOnIconEl.addEventListener('click', () => {
    hidePassword(passwordEl, eyeOffIconEl, eyeOnIconEl)
  })
  formEl.addEventListener('submit', handleSubmit)
}

document.addEventListener('DOMContentLoaded', onDocumentReady)
