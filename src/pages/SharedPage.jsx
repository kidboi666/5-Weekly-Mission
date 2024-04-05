import { useGetUserInfo } from "../api/useGetUserInfo";
import { Header } from "../components/Header/Header";

function SharedPage() {
  const { data } = useGetUserInfo();

  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <>
      <Header profile={profile} />
      <main></main>
    </>
  );
}

export default SharedPage;
