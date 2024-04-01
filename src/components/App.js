import React from "react";
import { getContent, getUser } from "../api/AppApi";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MainProfile from "./MainProfile";
import Search from "./Search";
import Cards from "./Cards";
import Footer from "./Footer";

// export function TestLoginData(userData) {
//   if (!userData) {
//     return <>테스트</>;
//   }

//   console.log("?", userData);
// }

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const handleContent = async () => {
    const { folder } = await getContent();

    setProfile(folder);
    setItems(folder.links);
  };

  const handleUser = async () => {
    const userData = await getUser();

    setUser(userData);
  };

  // 처음 한 번만 실행하기
  useEffect(() => {
    handleContent();
    handleUser();
  }, []);

  return (
    <>
      <Navigation user={user} />
      <MainProfile profile={profile} />
      <Search />
      <Cards items={items} />
      <Footer />
    </>
  );
}

export default App;
