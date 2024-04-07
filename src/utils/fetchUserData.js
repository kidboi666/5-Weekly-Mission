export async function fetchUserData() {
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
        if (!response.ok) {
            throw new Error('fetch Error');
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        return error
    }
}