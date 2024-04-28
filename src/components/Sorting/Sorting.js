import { useEffect, useState } from "react";
import "./Sorting.css";
import { ApiUrl } from "../../util/url";

export function Sorting({ Folders, selectedId, setSelectedId, setUrl }) {
  const [name, setName] = useState("");

  const onAllClick = () => {
    setUrl(ApiUrl.usersLinks);
    setName("전체");
    setSelectedId(undefined);
  };

  useEffect(() => {
    const nameById = selectedId
      ? Folders.find((item) => item.id === selectedId)?.name
      : "전체";
    setName(nameById);
  }, [selectedId, Folders]); // selectedId가 변경될 때만 실행되도록 설정

  return (
    <div className="sorting-wrapper">
      <div className="button-wrapper">
        <button onClick={() => onAllClick()}>
          <p className="sort-name">전체</p>
        </button>
        {Folders.map((Folder) => {
          return (
            <button key={Folder.id} onClick={() => setSelectedId(Folder.id)}>
              <p className="sort-name">{Folder.name}</p>
            </button>
          );
        })}
      </div>
      <div className="folder-name">{name}</div>
    </div>
  );
}
