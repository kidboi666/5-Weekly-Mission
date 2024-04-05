import { Header } from "../components/Header/Header";

function SharedPage() {
  const profile = {
    email: "email@email.com",
    profileImageSource:
      "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  };

  return (
    <>
      <Header profile={profile} />
      <main></main>
    </>
  );
}

export default SharedPage;
