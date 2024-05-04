import { useEffect, useState } from "react";
import "./Sorting.css";
import { ApiUrl } from "../../util/url";
import { ModalLayout } from "../ModalLayout";

export function Sorting({
  folders,
  selectedId,
  setName,
  setSelectedId,
  setUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const onAllClick = () => {
    setUrl(ApiUrl.usersLinks);
    setName("전체");
    setSelectedId(undefined);
  };

  useEffect(() => {
    const nameById = selectedId
      ? folders.find((item) => item.id === selectedId)?.name
      : "전체";
    setName(nameById);
  }, [selectedId, folders, setName]); // eslint-disable-next-line

  return (
    <>
      <div className="sorting-wrapper">
        <div className="button-wrapper">
          <button onClick={() => onAllClick()}>
            <p className="sort-name">전체</p>
          </button>
          {folders.map((folder) => {
            return (
              <button key={folder.id} onClick={() => setSelectedId(folder.id)}>
                <p className="sort-name">{folder.name}</p>
              </button>
            );
          })}
        </div>
        <div className="folder-title-wrapper" onClick={toggleHandler}>
          폴더추가
          <img src="images/add.svg" alt="addbutton" />
        </div>
        {isOpen && (
          <ModalLayout toggleHandler={toggleHandler} title="폴더 추가">
            <div className="modal-contents">
              <input placeholder="내용 입력" />
              <div className="add button">추가하기</div>
            </div>
          </ModalLayout>
        )}
      </div>
    </>
  );
}
