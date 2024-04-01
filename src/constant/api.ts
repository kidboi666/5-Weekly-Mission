// 로그인 후 header 정보
export interface IheaderUserLoginInfo {
  email:string,
  id:string,
  name?:string,
  profileImageSource?:string,
}
export async function headerUserLoginInfo() {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    const result = await response.json();
    if(response.ok) {
      return result;
    }   
  } catch (e) {
    console.log(e);
    return ;
  }
}
