import React, { useState, useEffect } from "react";
import {
  NavigationBar,
  LinkAddSearchBar,
  FolderCards,
  Footer,
} from "../components";
import { getUser, getFolders, getLinks } from "../util/api";

export const FolderPage = () => {
  const [user, setUser] = useState([]);
  const [Links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("전체");
  const [folderId, setFolderId] = useState(null);

  // 유저 프로필 정보
  async function fetchUser() {
    try {
      const data = await getUser();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  // 폴더 링크 정보
  async function fetchFolderLinks() {
    try {
      const { data } = await getLinks();
      setLinks(data);
    } catch (error) {
      console.error(error);
    }
  }

  // 폴더 정보
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

      <LinkAddSearchBar />

      <FolderCards
        links={Links}
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
