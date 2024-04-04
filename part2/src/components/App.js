import { useEffect, useState } from "react";
import { getSampleUser } from "../api";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

function App({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const handleLoadUser = async () => {
    const result = await getSampleUser();
    if (!result) return;

    const { email, profileImageSource } = result;
    setUserInfo((prevInfo) => ({ ...prevInfo, email, profileImageSource }));
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <>
      <Nav email={userInfo.email} imgUrl={userInfo.profileImageSource} />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default App;
