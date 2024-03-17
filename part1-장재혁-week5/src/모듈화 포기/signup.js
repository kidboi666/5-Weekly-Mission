import signModule from './sign.js'
const eyeButtons = document.getElementsByClassName('eye-button');
const eyeOffs = document.getElementsByClassName('eyeOff');

Array.from(eyeButtons).forEach(eyeButton => {
    eyeButton.addEventListener('mousedown', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.add('seePassword'));
        passwordInput.setAttribute('type', 'text')
    });
    eyeButton.addEventListener('mouseup', () => {
        Array.from(eyeOffs).forEach(eyeOff => eyeOff.classList.remove('seePassword'));
        passwordInput.setAttribute('type', 'password')
    });
});