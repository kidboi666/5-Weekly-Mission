import {FolderInfoTemplate, Profile, Owner, Folder} from "./design"

export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <FolderInfoTemplate>
      <Profile src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <Owner>{ownerName}</Owner>
      <Folder>{folderName}</Folder>
    </FolderInfoTemplate>
  );
};
