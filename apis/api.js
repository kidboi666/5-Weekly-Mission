export async function checkEmail(email) {
  const URL = 'https://bootcamp-api.codeit.kr/api/check-email';
  // const EMAIL = 'test@codeit.com';

  // const data = {
  //   email: EMAIL,
  // };

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      if (response.ok) {
        const body = response.json();
        return body;
      } else console.error('요청에 실패했습니다.');
    })
    .then((result) => {
      if (result.isUsableNickname) console.log('중복되지 않은 이메일 확인');
      else console.log('사용할 수 없는 중복된 이메일 오류');
    })
    .catch((error) => console.error('에러발생 : ', error));
}
