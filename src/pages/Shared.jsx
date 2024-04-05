import { fetchUserInfo } from "../api/user.js";
import { useFetch } from "../hooks/useFetch.js";

import { Header } from "../components/Header";

function Shared() {
  const { data } = useFetch(fetchUserInfo);
  const { profileImageSource, email } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <h1>hi</h1>
      <Header profile={profile} />
    </div>
  );
}

export default Shared;
