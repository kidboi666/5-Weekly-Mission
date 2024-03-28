import { useState, useEffect } from "react";

const Header = () => {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch folder data");
      }
      const data = await response.json();
      setFolderData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default Header;
