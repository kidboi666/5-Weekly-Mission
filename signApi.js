// fetch('https://bootcamp-api.codeit.kr/docs')
// .then((response) => response.json())
// .then((user) => console.log(user));


async function signinRequest (userData) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {email: userData.email,
       password: userData.password
    }) 
  })
  const resData = {
      httpCode: response.status,
      resData: await response.json()
  }
  return resData
}

async function signupRequest (userData) {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {email: userData.email
    }) 
  })
  const resData = {
      httpCode: response.status,
      resData: await response.json()
  }
  return resData
}


export { signinRequest, signupRequest }