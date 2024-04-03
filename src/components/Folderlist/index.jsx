import { useFetch } from "../../utils/hooks/useFetch";
import styled from "styled-components";
import "./index.css";

const BASE_URL_FOLDER = "https://bootcamp-api.codeit.kr/api/users/1/folders";

const FolderContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.8rem;
`;

function Folderlist() {
  const FolderlistData = useFetch(BASE_URL_FOLDER);

  const handleOnClick = (e) => {
    const btns = document.querySelectorAll(".folderButtons");
    btns.forEach(function (btn, i) {
      if (e.currentTarget === btn) {
        btn.classList.add(`active`);
      } else {
        btn.classList.remove(`active`);
      }
    });
  };

  return (
    <FolderContainer>
      {FolderlistData &&
        FolderlistData.data.map((folderdata) => (
          <button
            className="folderButtons"
            key={folderdata.id}
            onClick={handleOnClick}
          >
            {folderdata.name}
          </button>
        ))}
    </FolderContainer>
  );
}

export default Folderlist;

// 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용해 주세요.
// “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
// 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
