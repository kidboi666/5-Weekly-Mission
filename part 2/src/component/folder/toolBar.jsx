import "./toolBar.css";
import deleteIcon from "../../icon/delete.svg";
import penIcon from "../../icon/pen.svg";
import shareIcon from "../../icon/share.svg";
import Modal from "./modal/modal";
import { useState } from "react";

const ToolBar = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDel, setModalDel] = useState(false);

  const showModalEdit = () => {
    setModalEdit(true);
  };

  const showModalDel = () => {
    setModalDel(true);
  };

  return (
    <section className="folderTitle">
      <div className="folderArticleTitle">유용한 글</div>
      <div className="itemManager">
        <button className="ToolBtn">
          <img src={shareIcon} alt="shareIcon" />
          공유
        </button>
        <button onClick={showModalEdit} className="ToolBtn">
          <img src={penIcon} alt="penIcon" />
          이름 변경
        </button>
        {modalEdit && (
          <Modal
            setModal={setModalEdit}
            title={"폴더 이름 변경"}
            mid={
              <input
                className="modalInput"
                type="text"
                placeholder={"유용한 팁"}
              ></input>
            }
            btnname={"변경하기"}
            btnColor={"modalBtn"}
          />
        )}
        <button onClick={showModalDel} className="ToolBtn">
          <img src={deleteIcon} alt="deleteIcon" />
          삭제
        </button>
        {modalDel && (
          <Modal
            setModal={setModalDel}
            title={"폴더 삭제"}
            mid={<div className="modaltext">폴더명</div>}
            btnname={"삭제하기"}
            btnColor={"modalBtnDel"}
          />
        )}
      </div>
    </section>
  );
};

export default ToolBar;
