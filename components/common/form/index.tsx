export default function FormList() {
  return (
    <form>
      <div className='form__wrap login__form'>
        <div className='form__box'>
          <label
            htmlFor='email'
            className='text__size__s'>
            이메일
          </label>
          <input
            type='text'
            name='email'
            id='login__email'
            autoComplete='on'
          />
          <p className='error__text'></p>
        </div>
        <div className='form__box pw'>
          <label
            htmlFor='login__pw__input'
            className='text__size__s'>
            비밀번호
          </label>
          <div className='form__relative'>
            <input
              type='password'
              name='pw'
              id='login__pw__input'
              autoComplete='on'
            />
            <button
              type='button'
              className='btn__pw login__btn-pw'>
              <img
                src='/assets/icon/icon-eye-on.svg'
                alt='비밀번호 보기'
                className='icon__on'
              />
              <img
                src='/assets/icon/icon-eye-off.svg'
                alt='비밀번호 숨기기'
                className='icon__off'
              />
            </button>
          </div>
          <p className='error__text'></p>
        </div>
        {/* <Button $btnClass={`button--gradient large btn_login`}>로그인</Button> */}
      </div>
    </form>
  );
}
