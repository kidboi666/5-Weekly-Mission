const url = "https://bootcamp-api.codeit.kr/api";

export async function getUser() {
  try {
    const response = await fetch(`${url}/sample/user`, {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error");
  }
}
