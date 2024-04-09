import CardsBox from "./components/CardsBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Input from "./components/Input";
import { getFolderUser, getUser } from "./api";
import { useEffect, useState } from "react";
import "./Folder.css";
import "./reset.css";

function Folder() {
  const [user, setUser] = useState({});
  const [folderUser, setFolderUser] = useState({});

  const userLoad = async () => {
    try {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  const folderUserLoad = async () => {
    try {
      const fetchedFolderUser = await getFolderUser();
      //console.log(fetchedFolderUser);
      setFolderUser(fetchedFolderUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    folderUserLoad();
    userLoad();
  }, []);

  return (
    <div className="Folder">
      <Header user={user} />
      <Info folderUser={folderUser} />
      <main className="main">
        <Input />
        <CardsBox folderUser={folderUser} />
      </main>
      <Footer />
    </div>
  );
}
export default Folder;
