import { requestAuthorization } from './api/signinAPI';
import { requestSignUp } from './api/signupAPI';

export function signInSubmit() {
  requestAuthorization(
    document.querySelector('#user-email'),
    document.querySelector('#password')
  );
}

export function signUpSubmit() {
  requestSignUp(
    document.querySelector('#user-email'),
    document.querySelector('#password'),
    document.querySelector('#password-check')
  );
}
