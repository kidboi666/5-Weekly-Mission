import { useCallback, useState } from "react";
import { userFoldersTapData } from "../../fetchUtils";

import "./FolderTabList.css";
import Button from "./Button";
import CardTitleIcon from "../CardTitleIcon/CardTitleIcon";
import FolderAddButton from "./FolderAddButton";

function FolderTabList({ folderTabDataList, setUserFolderDataList, openModal }) {
  const [buttonClass, setButtonClass] = useState(null);
  const [name, setName] = useState(null);

  const onClickButton = useCallback(
    async (id, name) => {
      setButtonClass(id);
      setName(name);
      try {
        const data = await userFoldersTapData(id);
        setUserFolderDataList(data);
      } catch (e) {
        alert(e.message);
      }
    },
    [setUserFolderDataList]
  );

  return (
    <>
      <div className="tab-wrap">
        <ul className="tab-list-wrap">
          <li>
            <button
              className={buttonClass === null ? "select" : ""}
              onClick={() => onClickButton(null, null)}
            >
              전체
            </button>
          </li>
          {folderTabDataList.map((data) => {
            return (
              <li key={data.id}>
                <Button data={data} onClickButton={onClickButton} buttonClass={buttonClass} />
              </li>
            );
          })}
        </ul>
        <FolderAddButton openModal={openModal} />
      </div>
      <div className="card-title-wrap">
        <h3 className="card-title">{buttonClass === null ? "전체" : name}</h3>
        {buttonClass !== null ? <CardTitleIcon /> : null}
      </div>
    </>
  );
}

export default FolderTabList;
