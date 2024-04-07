import { useState, useEffect } from "react";
import { URL } from "./appAip";

/**
 * 폴더 목록 데이터
 */
export const fetchFolderList = async () => {
  try {
    const response = await fetch(`${URL}/users/1/folders`);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * 프로필 데이터
 */
export const fetchFolderUser = async () => {
  try {
    const response = await fetch(`${URL}/users/1`);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * 폴더 카드 데이터
 */
export const fetchFolderContent = async () => {
  try {
    const response = await fetch(`${URL}/users/1/links`);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

function FolderAip() {
  const [folderItems, setFolderItems] = useState([]);
  const [folderUser, setFolderUser] = useState([]);
  const [folderContent, setFolderContent] = useState([]);

  // 고치기
  const fetchFolders = async () => {
    const folder = await fetchFolderList();

    setFolderItems(folder.data);
  };

  // ----
  const fetchUser = async () => {
    const folder = await fetchFolderUser();

    setFolderUser(folder.data);
  };

  // ----
  const fetchContent = async () => {
    const folder = await fetchFolderContent();

    setFolderContent(folder.data);
  };

  useEffect(() => {
    fetchFolders();
    fetchUser();
    fetchContent();
  }, []);

  return { folderItems, folderUser, folderContent };
}

export default FolderAip;
