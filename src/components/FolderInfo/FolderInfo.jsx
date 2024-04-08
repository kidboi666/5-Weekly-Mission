import * as FolderLayout from "./FolderInfo.style";

export const FolderInfo = ({ folderName, ownerName, profileImage }) => {
  return (
    <FolderLayout.FolderInfo>
      <FolderLayout.FolderInfoProfile
        src={profileImage}
        alt="폴더 유저 프로필 이미지"
      />
      <FolderLayout.FolderInfoOwner>{ownerName}</FolderLayout.FolderInfoOwner>
      <FolderLayout.FolderInfoFolder>
        {folderName}
      </FolderLayout.FolderInfoFolder>
    </FolderLayout.FolderInfo>
  );
};
