import { useEffect, useState } from "react";
import { getSampleUser, getFolderInfo } from "../api";
import Nav from "./Nav";
import Footer from "./Footer";
import Folder from "./Folder";
import MainContent from "./MainContent";

function App() {
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [owner, setOwner] = useState({});
  const [folderName, setFolderName] = useState("");
  const [links, setLinks] = useState({});

  const handleLoadUser = async () => {
    const result = await getSampleUser();
    if (!result) return;

    const { email, profileImageSource } = result;
    setEmail(email);
    setImgUrl(profileImageSource);
  };

  const handleLoadFolder = async () => {
    const result = await getFolderInfo();
    if (!result) return;

    const { folder } = result;
    setOwner(folder.owner);
    setFolderName(folder.name);
    setLinks(folder.links);
  };

  useEffect(() => {
    handleLoadUser();
    handleLoadFolder();
  }, []);

  return (
    <div className="app">
      <Nav email={email} imgUrl={imgUrl} />
      <Folder owner={owner} folderName={folderName} />
      <MainContent links={links} />
      <Footer />
    </div>
  );
}

export default App;
