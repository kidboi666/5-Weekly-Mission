import { useFetch } from "../../utils/hooks/useFetch";
import styled from "styled-components";
import "./index.css";
import addfolderIcon from "../../assets/addfolder.svg";
import deleteicon from "../../assets/deleteicon.svg";
import changenameicon from "../../assets/changenameicon.svg";
import shareicon from "../../assets/shareicon.svg";
import { useState } from "react";
import Cardsfolder from "../../components/Cardsfolder";

const BASE_URL_FOLDER = "https://bootcamp-api.codeit.kr/api/users/1/folders";
const BASE_URL_ALL_FOLDER = "https://bootcamp-api.codeit.kr/api/users/1/links";

const FolderListContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.8rem;
  position: relative;
`;

const FolderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
  height: 3.2rem;
  margin-bottom: 2.4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  height: 1.8rem;
`;

function Foldermenu() {
  const FolderlistData = useFetch(BASE_URL_FOLDER);
  const [activeButton, setActiveButton] = useState("전체");
  const [url, setUrl] = useState(BASE_URL_ALL_FOLDER);

  const handleOnClick = (e) => {
    const folderId = e.currentTarget.id; // 클릭된 버튼의 ID 가져오기
    const folderName = e.currentTarget.textContent; // 클릭된 버튼의 텍스트 가져오기

    // 클릭된 버튼에 active 클래스 추가하기
    const btns = document.querySelectorAll(".folderButtons");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    setActiveButton(folderName); // 선택된 폴더의 이름 설정하기

    if (folderId !== "all") {
      setUrl(`${BASE_URL_ALL_FOLDER}?folderId=${folderId}`); // 선택된 폴더에 해당하는 URL 설정하기
    } else {
      setUrl(BASE_URL_ALL_FOLDER);
    }
  };

  return (
    <div>
      <FolderListContainer>
        <button
          className="folderButtons allFolders active"
          onClick={handleOnClick}
          id="all"
        >
          전체
        </button>
        {FolderlistData &&
          FolderlistData.data.map((folderdata) => (
            <button
              className="folderButtons"
              key={folderdata.id}
              onClick={handleOnClick}
              id={folderdata.id}
            >
              {folderdata.name}
            </button>
          ))}
        <img
          className="addFolderIcon"
          src={addfolderIcon}
          alt="폴더 추가 아이콘"
        />
      </FolderListContainer>
      <FolderMenuContainer>
        <p className="folderName">{activeButton}</p>
        <ImageContainer>
          <img src={shareicon} alt="폴더 공유 아이콘" />
          <img src={changenameicon} alt="폴더 이름 변경 아이콘" />
          <img src={deleteicon} alt="폴더 삭제 아이콘" />
        </ImageContainer>
      </FolderMenuContainer>
      <Cardsfolder url={url} />
    </div>
  );
}

export default Foldermenu;

// 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
// “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
// 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
