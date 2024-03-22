const login = 
try {
  fetch("https://bootcamp-api.codeit.kr/docs/api/sign-in", {
    method: Post,
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
} catch (error) {

} finally {
}
