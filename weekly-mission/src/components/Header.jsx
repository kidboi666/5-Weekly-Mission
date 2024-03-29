import useFetchData from "../Hooks/useFetchData";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
  overflow: hidden;
`;

const FolderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 40px;
  text-align: center;
`;

const FolderInfo = styled.div`
  display: inline-block;
  text-align: center;
`;

const ProfileImage = styled.img`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`;

const OwnerName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const FolderName = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
`;

const Header = () => {
  const folderData = useFetchData(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );

  return (
    <HeaderContainer>
      <FolderInfoContainer>
        {folderData && (
          <FolderInfo>
            <ProfileImage
              src={folderData.folder.owner.profileImageSource}
              alt="폴더 소유자 프로필"
            />
            <OwnerName>{folderData.folder.owner.name}</OwnerName>
            <FolderName>{folderData.folder.name}</FolderName>
          </FolderInfo>
        )}
      </FolderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
