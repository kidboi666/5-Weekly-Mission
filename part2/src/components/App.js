import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSampleUser, getFolderInfo, getFolderList, getLinkList } from "../api";
import SharedPage from "../pages/SharedPage";
import FolderPage from "../pages/FolderPage";

function useUser() {
  const [userInfo, setUserInfo] = useState({ email: "", imgUrl: "" });
  useEffect(() => {
    (async function loadData() {
      const result = await getSampleUser();
      if (!result) return;

      const { email, profileImageSource: imgUrl } = result;
      setUserInfo({ email, imgUrl });
    })();
  }, []);
  return { userInfo };
}

function useFolder() {
  const [folderInfo, setFolderInfo] = useState({});
  useEffect(() => {
    (async function loadData() {
      const result = await getFolderInfo();
      if (!result) return;

      const { folder } = result;
      setFolderInfo(folder);
    })();
  }, []);
  return { folderInfo };
}

function useFolderList() {
  const [folderList, setFolderList] = useState({});
  useEffect(() => {
    (async function loadData() {
      const result = await getFolderList(1);
      if (!result) return;

      const { data } = result;
      setFolderList({ data });
    })();
  }, []);
  return { folderList };
}

export function useLinkList() {
  const [linkList, setLinkList] = useState({});
  useEffect(() => {
    (async function loadData() {
      const result = await getLinkList(1);
      if (!result) return;

      const { data } = result;
      setLinkList({ data });
    })();
  }, []);
  return { linkList };
}

function App() {
  const { userInfo } = useUser();
  const { folderInfo } = useFolder();
  const { folderList } = useFolderList();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage userInfo={userInfo} folderInfo={folderInfo} />} />
        <Route path="/folder" element={<FolderPage userInfo={userInfo} folderInfo={folderInfo} folderList={folderList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
