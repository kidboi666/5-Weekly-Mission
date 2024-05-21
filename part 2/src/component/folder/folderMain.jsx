import "../main.css";
import Search from "../search";
import CardList from "./folderCardList";
import FilterButtons from "./filterButtons";
import LinkAddInput from "./linkAddInput";
import ToolBar from "./toolBar";

import { useState, useEffect, createContext } from "react";
import { getUserLinks } from "../api/usersLinksApi";

export const folderContext = createContext();

const FolderMain = () => {
  const [folderData, setforderData] = useState({ folders: {} });

  useEffect(() => {
    const resData = async () => {
      const data = await getUserLinks();
      setforderData(data.userProfile.data);
    };
    return resData;
  }, []);



  return (
    <main className="main">
      <folderContext.Provider value={folderData}>
        <section className="linkAddInput">
          <LinkAddInput />
        </section>
        <section className="cardListSearch">
          <Search />
          <FilterButtons />
          <ToolBar/>
          <CardList />
        </section>
      </folderContext.Provider>
    </main>
  );
};

export default FolderMain;
