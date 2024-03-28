import useFetchData from "../Hooks/useFetchData";
import styled from "styled-components";

const HeaderContainer = styled.header`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #edf7ff;
    overflow: hidden;
  }

  .folder_info_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 40px;
    text-align: center;
  }

  .folder_info {
    display: inline-block;
    text-align: center;
  }

  .folder_info_profile {
    margin-bottom: 20px;
    width: 60px;
    height: 60px;
  }

  .folder_info_owner {
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .folder_info_name {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
  }
`;

const Header = () => {
  const folderData = useFetchData(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <HeaderContainer>
      <header>
        <div className="folder_info_container">
          {folderData && (
            <div className="folder_info">
              <img
                className="folder_info_profile"
                src={folderData.folder.owner.profileImageSource}
                alt="폴더 소유자 프로필"
              />
              <span className="folder_info_owner">
                {folderData.folder.owner.name}
              </span>
              <h1 className="folder_info_name">{folderData.folder.name}</h1>
            </div>
          )}
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;
