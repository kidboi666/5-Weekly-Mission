import "../main.css";
import deleteIcon from "../../icon/delete.svg";
import penIcon from "../../icon/pen.svg";
import shareIcon from "../../icon/share.svg";
import Search from "../search";
import CardList from "./folderCardList";
import FilterButtons from "./filterButtons";
import LinkAddInput from "./linkAddInput";

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
          <section className="folderTitle">
            <div className="folderArticleTitle">유용한 글</div>
            <div className="itemManager">
              <div>
                <img src={shareIcon} />
                공유
              </div>
              <div>
                <img src={penIcon} />
                이름 변경
              </div>
              <div>
                <img src={deleteIcon} />
                삭제
              </div>
            </div>
          </section>
          <CardList />
        </section>
      </folderContext.Provider>
    </main>
  );
};

export default FolderMain;
