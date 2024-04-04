import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSampleUser, getFolderInfo } from "../api";
import SharedPage from "../pages/SharedPage";
import FolderPage from "../pages/FolderPage";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [folderInfo, setFolderInfo] = useState({});

  const handleLoadUser = async () => {
    const result = await getSampleUser();
    if (!result) return;

    const { email, profileImageSource } = result;
    setUserInfo((prevInfo) => ({ ...prevInfo, email, profileImageSource }));
  };

  const handleLoadFolder = async () => {
    const result = await getFolderInfo();
    if (!result) return;

    const { folder } = result;
    setFolderInfo((prevInfo) => ({
      ...prevInfo,
      owner: folder.owner,
      name: folder.name,
      links: folder.links,
    }));
  };

  useEffect(() => {
    handleLoadUser();
    handleLoadFolder();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage userInfo={userInfo} folderInfo={folderInfo} />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
