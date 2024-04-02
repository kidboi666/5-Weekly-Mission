// 로그인 후 header 정보
export interface IHeaderUserLoginInfo {
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

// folder list dummy
export interface IFolderListApi {
  id:string,
  image_url:string,
  description?:string,
  created_at?:string,
}
export async function folderListApi() {
  try {
    const response = await fetch("dummy.json");
    const result =  response.json();
    if(response.ok) {
      return result;
    }  
  } catch (e) {
    console.log(e);
    return ;
  }
}