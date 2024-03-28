import BASE_URL from './base_url.js'

export default async function register(registerOption) {
  console.log(registerOption)
  try {
    const response = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerOption),
    })
    if (!response?.ok) {
      return {
        success: false,
        message: '요청이 올바르지 않습니다.',
      }
    }

    const responseData = await response.json()
    localStorage.setItem('accessToken', responseData.data.accessToken)
    return { success: true }
  } catch (error) {
    console.log('Error:', error)
    return { success: false, message: '서버 에러' }
  }
}
