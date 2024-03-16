const btnTypeChange = document.querySelectorAll(".btn__pw"); // join pass2 button

function changeInputType (e) {
  const btn = e.currentTarget;
  let inputType = e.target.closest('.form__box').querySelector('input');

  if(inputType.type === 'password') {
    inputType.type = 'text';
    btn.classList.add('btn__pw__off');
  } else if (inputType.type === 'text') {
    inputType.type = 'password';
    btn.classList.remove('btn__pw__off');
  }
}

for (const btn of btnTypeChange) {
  btn.addEventListener('click', changeInputType);
}