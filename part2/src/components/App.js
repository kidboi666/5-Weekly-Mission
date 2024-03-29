import Nav from "./Nav";
import Footer from "./Footer";
import { getSampleUser } from "../api";
import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleLoadUser = async () => {
    const result = await getSampleUser();
    if (!result) return;

    const { email, name, profileImageSource } = result;
    setEmail(email);
    setName(name);
    setImgUrl(profileImageSource);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <div className="app">
      <Nav email={email} name={name} imgUrl={imgUrl} />
      <Footer />
    </div>
  );
}

export default App;
