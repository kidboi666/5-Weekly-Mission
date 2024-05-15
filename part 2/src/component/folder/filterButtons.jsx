import "./filterButtons.css";
import addIcon from "../../icon/add.svg";
import { getUserFolders } from "../api/usersFoldersApi";

import { useState, useEffect, createContext } from "react";

const CardList = () => {
  const [folderData, setforderData] = useState({ folders: {} });

  useEffect(() => {
    const resData = async () => {
      try {
        const data = await getUserFolders();
        setforderData(data.userProfile.data);
      } catch (error) {
        console.error(error);
      }
    };
    return resData;
  }, []);

  const filterButtons = Object.entries(folderData).map(([key, value]) => (
    <button key={key} name={value.name} className="filterBtn">
      {value.name}
    </button>
  ));

  return (
    <section className="filterButtonListWrap">
      <div className="filterButtonList">{filterButtons}</div>
      <button className="folerAddButton">
        폴더추가
        <img src={addIcon} alt="addIcon" />
      </button>
    </section>
  );
};

export default CardList;
