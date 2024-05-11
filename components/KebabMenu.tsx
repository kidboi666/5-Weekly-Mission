import "./KebabMenu.css";
import KebabImg from "@/public/kebab.svg";
import DeleteFolder from "@/modals/DeleteFolder";
import AddLinkToFolder from "@/modals/AddLinkToFolder";
import { useState, useEffect, useRef, MouseEvent } from "react";

interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

interface KebabMenuProps {
  url: string;
  folders: Folder[];
}

const KebabMenu: React.FC<KebabMenuProps> = ({ url, folders }) => {
  const [viewDropdown, setViewDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState<string>("");
  const kebabButtonRefRef = useRef<HTMLDivElement | null>(null);

  /** 드롭다운 메뉴 이외의 영역을 클릭시 드롭다운 메뉴 닫힘 */
  const handleClickOutside = (e: MouseEvent | Event): void => {
    if (
      kebabButtonRefRef &&
      !kebabButtonRefRef.current.contains(e.target as Node)
    ) {
      setViewDropdown(false);
    }
  };

  /** handleClickOutside 마우스다운 이벤트 추가*/
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const dropdownToggle = (e: MouseEvent): void => {
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
                setModalOpen("delete");
              }}
            >
              삭제하기
            </button>
          </li>
          <li>
            <button
              className="KebabMenu__option"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen("addFolder");
              }}
            >
              폴더에 추가
            </button>
          </li>
        </ul>
      )}
      {modalOpen === "delete" && (
        <DeleteFolder
          madalTitle={"링크 삭제"}
          title={url}
          onClose={setModalOpen}
        />
      )}
      {modalOpen === "addFolder" && (
        <AddLinkToFolder title={url} folders={folders} onClose={setModalOpen} />
      )}
    </div>
  );
};

export default KebabMenu;
