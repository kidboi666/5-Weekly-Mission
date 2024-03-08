const $iconButtons = document.querySelectorAll(".input-icon");
const $inputs = document.querySelectorAll(".input-login-form01 input");
const $loginButton = document.querySelector(".login-button");
const $loginForm = document.querySelector(".login-form");

let checkCodeitEmail = false;
let checkCodeitPassword = false;

const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

$inputs.forEach(function (input) {
    input.addEventListener("focusout", (e) => {
        // 이메일
        if (e.target.type === "email" && e.target.value === "") {
            e.target.nextElementSibling.textContent = "이메일을 입력해 주세요.";
            e.target.style.border = "1px solid #ff5b56";
            return;
        } else if (
            e.target.type === "email" &&
            regex.test(e.target.value) === false
        ) {
            e.target.nextElementSibling.textContent =
                "올바른 이메일 주소가 아닙니다.";
            e.target.style.border = "1px solid #ff5b56";
            return;
        } else if (e.target.type === "email") {
            e.target.nextElementSibling.textContent = "";
            e.target.style.border = "1px solid #ccd5e3";
            if (e.target.value === "test@codeit.com") {
                checkCodeitEmail = true;
            }
        }

        //비밀번호
        if (e.target.type === "password" && e.target.value === "") {
            e.target.parentElement.nextElementSibling.textContent =
                "비밀번호를 입력해 주세요.";
            e.target.style.border = "1px solid #ff5b56";
            return;
        } else if (e.target.type === "password") {
            e.target.parentElement.nextElementSibling.textContent = "";
            e.target.style.border = "1px solid #ccd5e3";
            if (e.target.value == "codeit101") {
                checkCodeitPassword = true;
            }
        }
    });
});

// 로그인
$loginForm.addEventListener("submit", function (e) {
    $loginButton.focus();

    if (checkCodeitEmail == true && checkCodeitPassword == true) {
        location.href = "./folder.html";
    }
    e.preventDefault();
});

// 패스워드 아이콘 보기
$iconButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("on")) {
            btn.previousElementSibling.type = "password";
            btn.classList.add("off");
            btn.classList.remove("on");
        } else {
            btn.previousElementSibling.type = "text";
            btn.classList.add("on");
            btn.classList.remove("off");
        }
    });
});
