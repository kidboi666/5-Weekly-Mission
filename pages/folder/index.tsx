import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LinkAddSearchBar, NavigationBar, FolderCards, Footer } from "components";
import { getUser, getLinks, getFolders } from "./api";

export default function Folder() {
  const router = useRouter();
  const [user, setUser] = useState();
  const [link, setLink] = useState();
  const [folder, setFolder] = useState();
  const [folderName, setFolderName] = useState("전체");
  const [folderId, setFolderId] = useState(null);
  const { q } = router.query;

  const fetchData = async () => {
    const user = await getUser();
    const link = await getLinks();
    const folder = await getFolders();

    setUser(user);
    setLink(link);
    setFolder(folder);
  };

  useEffect(() => {
    fetchData();
  }, [])

  if (!user || !link || !folder) return null;

  const {name, profileImageSource: profile, email} = user;

  return (
    <div>
      <NavigationBar 
        name={name}  
        profile={profile}
        email={email}
      />

      <LinkAddSearchBar />

      {/* <h2>{q} 검색 결과</h2> */}

      <FolderCards
        links={link}
        folders={folder}
        folderName={folderName}
        setFolderName={setFolderName}
        folderId={folderId}
        setFolderId={setFolderId}

        search={q}
      />

      <Footer />
    </div>
  );
}