const URL = "https://bootcamp-api.codeit.kr/api";

// 로그인
const signinRequest = async () => {
  try {
    const response = await fetch(`${URL}/sample/folder`);

    if (response.ok) {
      const items = await response.json();
      return items;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const items = await signinRequest();

console.log(items.folder.links);

console.log(items.folder.links[0].id);
