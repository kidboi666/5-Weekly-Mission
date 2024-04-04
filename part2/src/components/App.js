import { useEffect, useState } from "react";
import { getSampleUser, getFolderInfo } from "../api";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Folder from "./Folder/Folder";
import MainContent from "./MainContent/MainContent";

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
    <div className="app">
      <Nav email={userInfo.email} imgUrl={userInfo.profileImageSource} />
      <Folder owner={folderInfo.owner} folderName={folderInfo.name} />
      <MainContent links={folderInfo.links} />
      <Footer />
    </div>
  );
}

export default App;
