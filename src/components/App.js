import React from "react";
import { getContent } from "../api/AppApi";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MainProfile from "./MainProfile";
import Search from "./Search";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  // const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getContent();
    // console.log("test", folder);

    setProfile(folder);
    setItems(folder.links);
  };

  // 처음 한 번만 실행하기
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Navigation />
      <MainProfile profile={profile} />
      <Search />
      <Cards items={items} />
      <Footer />
    </>
  );
}

export default App;
