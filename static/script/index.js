// 이메일 input
const email = document.querySelector('.id');
const emailTag = document.querySelector('.emailTag')
// 비밀번호 input
const pw = document.querySelector('.password');
const passwordTag = document.querySelector('.passwordTag')
// 로그인 button
const loginBtn = document.querySelector('.loginBtn')
// 비밀번호 눈 아이콘
const eyesToggle = document.querySelector('.eyes')

//emailInput focus-out시 이벤트 함수
function idFocusOut(e) {
    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;
    let emailNotice = document.querySelector('.email-notice');

    if(emailNotice) {
        emailNotice.remove();
    }

    const emailInput = document.createElement('p');
    emailInput.className = 'email-notice';
    emailInput.style.color = 'red';

    if(e.target.value == '') {
        emailInput.textContent = '이메일을 입력해주세요.';
        emailTag.append(emailInput);
    } else if (!emailCheck.test(e.target.value)) {
        emailInput.textContent = '이메일 형식이 아닙니다.';
        emailTag.append(emailInput);
    }
}

// passwordInput focus-out시 이벤트 함수
function passwordFocusOut(e) {
    let pwNotice = document.querySelector('.password-notice');
    if (e.target.value=='') {
        if (!pwNotice){
            const passwordInput = document.createElement('p');
            passwordInput.className = 'password-notice';
            passwordInput.textContent = '비밀번호를 입력해주세요.';
            passwordInput.style.color = 'red';
            passwordTag.append(passwordInput);
        }
    }
    else {
        pwNotice.remove();
    }
}

// 로그인 함수
function login(e) {
    const testId = 'test@codeit.com';
    const testPassword = 'codeit101';

    if (email.value == testId && pw.value == testPassword) {
        location.href='../folder.html';
    }
    else {
        const loginCheck = document.querySelector('.login-check');

        if(!loginCheck){
            const notEmail = document.createElement('p');
            const notPassword = document.createElement('p'); 
    
            notEmail.className = 'login-check';
            notEmail.style.color = 'red';
            notEmail.textContent = '이메일을 확인해주세요.';
            emailTag.append(notEmail);
    
            notPassword.className = 'login-check';
            notPassword.style.color = 'red';
            notPassword.textContent = '비밀번호를 확인해주세요.';
            passwordTag.append(notPassword);
        }
    }
}

//로그인 버튼 Enter키 적용
function enterLogin (e) {
    if (e.key === 'Enter') {
      login();
    }
  }
  
//눈 아이콘 눌렀을 때 비밀번호 보이기
function showPassword(e) {
    if(eyesToggle.getAttribute('src') == '/static/img/noeyes.svg') {
        eyesToggle.setAttribute('src', '/static/img/eyes.svg');
        pw.setAttribute('type', 'text')
    }
    else {
        eyesToggle.setAttribute('src', '/static/img/noeyes.svg'); 
        pw.setAttribute('type', 'password')
    }
}

// emailInput focus-out시 이벤트 함수 적용
email.addEventListener('focusout', idFocusOut);
// password focus-out시 이벤트 함수 적용
pw.addEventListener('focusout', passwordFocusOut);
// 로그인 이벤트 함수 적용
loginBtn.addEventListener('click', login);
// 로그인 시 Enter키 이벤트 함수 적용
email.addEventListener('keypress', enterLogin);
pw.addEventListener('keypress', enterLogin);
// 눈 아이콘 클릭 시 password 보이게 만드는 이벤트 함수 적용
eyesToggle.addEventListener('click', showPassword)