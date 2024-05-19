import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "/lib/axios";
import { LinkAddSearchBar, NavigationBar, FolderCards, Footer } from "/components";

export default function Folder() {
  const router = useRouter();
  const [user, setUser] = useState();
  const [link, setLink] = useState();
  const [folder, setFolder] = useState();
  const [folderName, setFolderName] = useState("전체");
  const [folderId, setFolderId] = useState(null);
  const { q } = router.query;

  // 유저 정보
  async function getUser() {
    const user = await axios.get(`/sample/user`);
    const nextUser = user.data;
  
    setUser(nextUser);
  }

  async function getLink() {
    const links = await axios.get(`/users/1/links`);
    const nextLink = links.data;

    setLink(nextLink.data)
  }

  async function getFolder() {
    const folders = await axios.get(`/users/1/folders`);
    const nextFolder = folders.data;

    setFolder(nextFolder.data)
  }

  useEffect(() => {
    getUser();
    getLink();
    getFolder();
  }, [])

  if (!user) return null;
  if (!link) return null;
  if (!folder) return null;

  return (
    <div>
      <NavigationBar user={user} />

      <LinkAddSearchBar initialValue={q}/>

      <h2>{q} 검색 결과</h2>

      <FolderCards
        links={link}
        folders={folder}
        folderName={folderName}
        setFolderName={setFolderName}
        folderId={folderId}
        setFolderId={setFolderId}
      />

      <Footer />
    </div>
  );
}