import React, { useState, useEffect } from "react";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { CenterSearchBar } from "../components/CenterSearchBar";
import { FolderCards } from "../components/FolderCards";
import { Footer } from "../components/Footer";
import { getUser } from "../util/api/getUsers";
import { getFolders } from "../util/api/getFolders";
import { getLinks } from "../util/api/getLinks";

export const FolderPage = () => {
  const [user, setUser] = useState([]);
  const [cards, setCards] = useState([]);
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("전체");
  const [folderId, setFolderId] = useState();

  async function fetchUser() {
    try {
      const data = await getUser();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchFolderLinks() {
    try {
      const { data } = await getLinks();
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchFolderFolders() {
    try {
      const { data } = await getFolders();
      setFolders(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchFolderLinks();
    fetchFolderFolders();
  }, []);

  return (
    <div>
      <NavigationBar user={user} />
      <CenterSearchBar />
      <FolderCards
        items={cards}
        folders={folders}
        folderName={folderName}
        setFolderName={setFolderName}
        folderId={folderId}
        setFolderId={setFolderId}
      />
      <Footer />
    </div>
  );
};
