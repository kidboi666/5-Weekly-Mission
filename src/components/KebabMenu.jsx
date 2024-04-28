import "./KebabMenu.css";
import KebabImg from "../assets/kebab.svg";
import DeleteFolder from "../modals/DeleteFolder";
import { useState, useEffect, useRef } from "react";

function KebabMenu({ url }) {
  const [viewDropdown, setViewDropdown] = useState(false);
  const [deleteFolderOfen, setDeleteFolderOfen] = useState(false);
  const kebabButtonRefRef = useRef(null);

  /** handleClickOutside 마우스다운 이벤트 추가*/
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /** 드롭다운 메뉴 이외의 영역을 클릭시 드롭다운 메뉴 닫힘 */
  const handleClickOutside = (e) => {
    if (kebabButtonRefRef && !kebabButtonRefRef.current.contains(e.target)) {
      setViewDropdown(false);
    }
  };

  const dropdownToggle = (e) => {
    e.preventDefault();
    setViewDropdown(!viewDropdown);
  };

  return (
    <div className="KebabMenu" ref={kebabButtonRefRef}>
      <button className="KebabMenu__btn" onClick={dropdownToggle}>
        <img className="KebabMenu__img" src={KebabImg} alt="케밥버튼" />
      </button>
      {viewDropdown && (
        <ul className="KebabMenu__options">
          <li>
            <button
              className="KebabMenu__option"
              onClick={(e) => {
                e.preventDefault();
                setDeleteFolderOfen(true);
              }}
            >
              삭제하기
            </button>
            {deleteFolderOfen && (
              <DeleteFolder
                madalTitle={"링크 삭제"}
                title={url}
                onClose={setDeleteFolderOfen}
              />
            )}
          </li>
          <li>
            <button className="KebabMenu__option">폴더에 추가</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default KebabMenu;
