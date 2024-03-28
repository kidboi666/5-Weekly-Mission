import BASE_URL from './base_url.js'

export default async function login(loginOption) {
  try {
    const response = await fetch(`${BASE_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginOption),
    })
    if (!response?.ok) {
      return {
        success: false,
        message: '이메일 혹은 패스워드가 잘못되었습니다.',
      }
    }
    const responseData = await response.json()
    console.log(responseData)
    localStorage.setItem('accessToken', responseData.data.accessToken)
    return { success: true }
  } catch (error) {
    console.error('Error:', error)
    return { success: false, message: '서버 요청에서 에러가 발생하였습니다.' }
  }
}
