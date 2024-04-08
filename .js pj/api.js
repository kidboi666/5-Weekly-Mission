const baseUrl = `https://bootcamp-api.codeit.kr/api`
export const signInUrl = `${baseUrl}/sign-in`;
export const checkEmailUrl = `${baseUrl}/check-email`;
export const signUpUrl = `${baseUrl}/sign-up`;

export function postData(apiUrl, userData) {
    return fetch (apiUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });
}

export function checkAccessToken(accessToken) {
    const token = localStorage.getItem(accessToken);
    if (token) {
        location.href = 'folder.html';
    }
};

export function saveAccessTokenToLocalStorage(result, accessTokenName) {
    const accessToken = result.data.accessToken;
    localStorage.setItem(accessTokenName, accessToken);
}