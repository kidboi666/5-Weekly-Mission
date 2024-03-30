const URL = "https://bootcamp-api.codeit.kr/api";

export async function getContent() {
  const reponse = await fetch(`${URL}/sample/folder`);
  const result = await reponse.json();

  return result;
}

// try ... catch (error) {} 로 변경하기
