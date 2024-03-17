/**
 * @description auth에 필요한 함수와 변수를 객체 형태로 관리합니다.
 */

const _auth = {
  // 다루게 될 DOM 객체들
  /**
   * @description 이메일 입력
   */
  emailInput: document.getElementById("emailInput"),

  /**
   * @description 패스워드 입력
   */
  passwordInput: document.getElementById("passwordInput"),

  /**
   * @description 이메일 에러메시지 영역
   */
  emailError: document.getElementById("emailError"),

  /**
   * @description 패스워드 에러메시지 영역
   */
  passwordError: document.getElementById("passwordError"),

  /**
   * @description 로그인 시 작성하는 폼 (제출된 입력 다룸)
   */
  loginForm: document.getElementById("loginForm"),

  /**
   * @description 패스워드확인 입력
   */
  passwordCheck: document.getElementById("passwordCheck"),

  /**
   * @description 패스워드확인 에러메시지 영역
   */
  passwordCheckError: document.getElementById("passwordCheckError"),

  /**
   * @description 회원가입 시 작성하는 폼 (제출된 입력 다룸)
   */
  signupForm: document.getElementById("signupForm"),

  /**
   * @description 에러메시지 띄움
   * @param {*} inputField 사용자가 입력한 입력필드
   * @param {*} errField 에러메시지 띄울 곳
   * @param {*} message 에러메시지
   */
  toggleErr: function (inputField, errField, message) {
    errField.textContent = message;
    inputField.classList.remove("auth__input-border--default");
    inputField.classList.add("auth__input-border--error");
  },

  /**
   * @description 에러메시지 삭제
   * @param {*} inputField 사용자가 입력한 입력필드
   * @param {*} errField 에러메시지 없앨 곳
   */
  toggleDefault: function (inputField, errField) {
    errField.textContent = "";
    inputField.classList.remove("auth__input-border--error");
    inputField.classList.add("auth__input-border--default");
  },

  /**
   * @param {*} inputField 사용자가 입력한 입력필드
   * @returns 빈 영역인지 판단
   */
  isEmpty: function (inputField) {
    return !inputField.value;
  },

  /**
   * @returns 이메일 형식 판단 (부르면 자동으로 이메일 입력의 형식 검사)
   */
  isEmail: function () {
    return /\S+@\S+\.\S+/.test(this.emailInput.value);
  }, //이메일 형식이 맞는지 판단

  /**
   * @description 이메일 영역이 비었을 시 에러메시지 띄움.
   * @returns 이메일 영역 작성 여부
   */
  isEmailWritten: function () {
    if (this.isEmpty(this.emailInput)) {
      this.toggleErr(
        this.emailInput,
        this.emailError,
        "이메일을 입력해 주세요."
      );
      return false;
    }
    return true;
  },

  /**
   * @description 이메일 형식이 맞는지 검사 (~~~@~~.~~). 형식에 맞지 않으면 에러메시지 띄움
   * @returns 이메일 형식이 올바른지에 대한 여부
   */
  commonEmailForm: function () {
    if (!this.isEmail()) {
      // 이메일 형식에 맞지 않은 경우
      this.toggleErr(
        this.emailInput,
        this.emailError,
        "올바른 이메일 주소가 아닙니다."
      );
      return false;
    }
    return true;
  },

  /**
   * @description 패스워드 작성했는지 검사 (argument는 signupForm에서 passwordCheck에 대해 재사용하기 위함)
   * @returns 패스워드 형식이 올바른지에 대한 여부
   */
  isPasswordWritten: function (
    passwordInput = this.passwordInput,
    passwordError = this.passwordError
  ) {
    if (this.isEmpty(passwordInput)) {
      this.toggleErr(passwordInput, passwordError, "비밀번호를 입력해 주세요.");
      return false;
    }
    return true;
  },

  /**
   * @description 패스워드 형식 검사 (회원가입에만 적용)
   * @returns 패스워드 형식이 올바른지에 대한 여부 (회원가입에만 적용)
   */
  commonPasswordForm: function () {
    const hasLetters = /[a-zA-Z]/.test(this.passwordInput.value); // 문자열이 없을 경우(영문이 조합에 없음) -> 숫자만 있다
    const hasNumbers = /\d/.test(this.passwordInput.value); // 숫자가 없을 경우(숫자가 조합에 없음) -> 문자열만 있다
    const isLongEnough = this.passwordInput.value.length >= 8; //  값이 8자 미만
    // 비밀번호 검증 로직
    if (
      (!isLongEnough || !hasLetters || !hasNumbers) &&
      this.passwordInput.value
    ) {
      // 조건을 충족하지 못하는 경우 에러 메시지 표시
      this.toggleErr(
        this.passwordInput,
        this.passwordError,
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
      return false;
    }
    return true;
  },
};

export const auth = {
  /**
   * @description 이메일 입력 필드에 대해 focus out, focus in시 입력의 유효성 판단 관련 이벤트 처리
   */
  emailFocusEvent: function () {
    const { emailInput, emailError } = _auth;
    emailInput.addEventListener("focusout", () => {
      // focusout시 입력 형식 올바른지 검사
      if (_auth.isEmailWritten()) {
        //이메일이 쓰여져 있을 시 검사 시행
        if (_auth.commonEmailForm()) {
          // 이메일 형식 검사 후 올바를 시 내부 실행
          _auth.toggleDefault(emailInput, emailError); // 이메일 형식에 문제없음
        }
      }
    });
    emailInput.addEventListener("focusin", () => {
      // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
      if (!_auth.isEmailWritten()) {
        // 이메일 아직 넣지 않은 경우
        _auth.toggleDefault(emailInput, emailError); // 아직은 문제없음을 표시
      }
    });
  },

  /**
   * @description 비밀번호 입력 필드에 대해 focus out, focus in시 입력의 유효성 판단 관련 이벤트 처리
   */
  passwordFocusEvent: function () {
    const { passwordInput, passwordError } = _auth;
    passwordInput.addEventListener("focusout", () => {
      // focusout시 입력 형식 올바른지 검사
      if (_auth.isPasswordWritten()) {
        _auth.toggleDefault(passwordInput, passwordError);
      }
    });
    passwordInput.addEventListener("focusin", () => {
      // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
      if (!_auth.isPasswordWritten()) {
        _auth.toggleDefault(passwordInput, passwordError);
      }
    });
  },

  /**
   * @description 로그인 폼에서 제출된 입력에 대한 유효성 검사
   */
  loginSubmissionChecker: function () {
    const { loginForm, emailInput, emailError, passwordInput, passwordError } =
      _auth;

    loginForm.addEventListener("submit", function (event) {
      //폼 제출 시 로그인 시도
      event.preventDefault(); // 폼 기본 제출 동작 방지

      if (
        emailInput.value === "test@codeit.com" &&
        passwordInput.value === "codeit101"
      ) {
        //로그인 성공
        window.location.href = "folder.html";
      } else {
        // 아이디 비번에 대해 각각 검사 (에러 원인 찾기)
        if (_auth.isEmailWritten()) {
          if (_auth.commonEmailForm()) {
            if (emailInput.value !== "test@codeit.com") {
              // 이메일 틀림
              _auth.toggleErr(
                emailInput,
                emailError,
                "이메일을 확인해 주세요."
              );
            }
          }
        }

        if (_auth.isPasswordWritten()) {
          if (passwordInput.value !== "codeit101") {
            // 비밀번호 틀림
            _auth.toggleErr(
              passwordInput,
              passwordError,
              "비밀번호를 확인해 주세요."
            );
          }
        }
      }
    });
  },

  /**
   * @description 비밀번호 확인 필드에 대해 focus out, focus in시 입력의 유효성 판단 관련 이벤트 처리
   */
  passwordCheckFocusEvent: function () {
    const { passwordCheck: passwordInput, passwordCheckError: passwordError } =
      _auth;
    passwordInput.addEventListener("focusout", () => {
      // focusout시 입력 형식 올바른지 검사
      if (_auth.isPasswordWritten(passwordInput, passwordError)) {
        _auth.toggleDefault(passwordInput, passwordError);
      }
    });
    passwordInput.addEventListener("focusin", () => {
      // focusin시 입력을 아예 안했던 상황이면 에러메시지 제거
      if (!_auth.isPasswordWritten(passwordInput, passwordError)) {
        _auth.toggleDefault(passwordInput, passwordError);
      }
    });
  },

  /**
   * @description 등록하려는 비밀번호가 올바른 형식인지 검사
   */
  passwordFormatChecker: function () {
    passwordInput.addEventListener("focusout", function () {
      _auth.commonPasswordForm();
    });
  },

  /**
   * @description 등록된 이메일인지 검사
   */
  IsDefaultAccount: function () {
    const { emailInput, emailError } = _auth;
    emailInput.addEventListener("focusout", function () {
      // focusout시 입력 형식 올바른지 검사
      if (emailInput.value === "test@codeit.com") {
        //이미 존재하는 아이디
        _auth.toggleErr(emailInput, emailError, "이미 사용 중인 이메일입니다.");
      }
    });
  },

  /**
   * @description 회원가입 폼에서 제출된 입력에 대한 유효성 검사
   */
  signupSubmissionChecker: function () {
    const {
      signupForm,
      emailInput,
      emailError,
      passwordInput,
      passwordError,
      passwordCheck,
      passwordCheckError,
    } = _auth;

    signupForm.addEventListener("submit", function (event) {
      //폼 제출 시 로그인 시도
      event.preventDefault(); // 폼 기본 제출 동작 방지

      var isValid = true; // 회원가입에 유효한 입력인지 검사 -> 이게 마지막에 1이면 제출 성공 아니면 실패
      var validity = true; // 각각의 입력필드에서 입력이 타당한지를 나타낸다

      // 이메일 검사
      if ((validity = _auth.isEmailWritten())) {
        // 이메일 작성여부 검사
        if ((validity = _auth.commonEmailForm())) {
          // 이메일의 형식이 올바른지 검사
          if ((validity = !(emailInput.value === "test@codeit.com"))) {
            // 이미 존재하는 아이디는 아닌지 검사
          } else {
            _auth.toggleErr(
              emailInput,
              emailError,
              "이미 사용 중인 이메일입니다."
            );
          }
        }
      }
      isValid = validity && isValid;

      //비밀번호 검증 로직
      if ((validity = _auth.isPasswordWritten())) {
        // 비밀번호 작성여부 검사
        validity = _auth.commonPasswordForm(); // 비밀번호 서식 검사
      }
      isValid = validity && isValid;

      //비밀번호 확인과 비밀번호의 입력이 일치하는지 검사
      if (passwordCheck.value !== passwordInput.value) {
        _auth.toggleErr(
          passwordCheck,
          passwordCheckError,
          "비밀번호가 일치하지 않아요."
        );
        validity = 0;
      }
      isValid = validity && isValid;

      if (isValid) {
        // isValid가 1일 때, 즉 오차가 없을 시 -> 폼 제출 성공
        window.location.href = "folder.html";
      }
    });
  },
};
