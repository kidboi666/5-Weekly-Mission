import "./filterButtons.css";
import addIcon from "../../icon/add.svg";
import Modal from "./modal/modal";
import { getUserFolders } from "../api/usersFoldersApi";
import { useState, useEffect } from "react";

const CardList = () => {
  const [folderData, setforderData] = useState({ folders: {} });
  const [modalAddFolder, setModalAddFolder] = useState(false);

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

  const showModalAddFolder = () => {
    setModalAddFolder(true);
  };

  const filterButtons = Object.entries(folderData).map(([key, value]) => (
    <button key={key} name={value.name} className="filterBtn">
      {value.name}
    </button>
  ));

  return (
    <section className="filterButtonListWrap">
      <div className="filterButtonList">{filterButtons}</div>
      <button onClick={showModalAddFolder} className="folerAddButton">
        폴더추가
        <img src={addIcon} alt="addIcon" />
      </button>
      {modalAddFolder && (
          <Modal
            setModal={setModalAddFolder}
            title={"폴더 추가"}
            mid={
              <input
                className="modalInput"
                type="text"
                placeholder={"내용 입력"}
              ></input>
            }
            btnname={"추가하기"}
            btnColor={"modalBtn"}
          />
        )}
    </section>
  );
};

export default CardList;
