import { useEffect, useState } from "react";
import {
  Folder,
  AddLink,
  Search,
  AppLayout,
  Card,
  FolderLayout,
} from "@/src/components";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useApp";
import { Link } from "@/src/services/types";
import { getAllLinkList, getLinkList } from "@/src/store/actions/link";
import { getFolder } from "@/src/store/actions/folder";
import { useRouter } from "next/router";

export interface CurrentFolderType {
  name: string;
  id: number;
}

const FolderPage = () => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentFolder, setCurrentFolder] = useState<CurrentFolderType>({
    name: "",
    id: 0,
  });
  const userId = useAppSelector((state) => state.auth.userInfo.id);
  const { data: linkList } = useAppSelector((state) => state.link);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { folderId } = router.query;

  const fetchFolderList = () => {
    dispatch(getFolder(userId));
  };

  const fetchLinkList = () => {
    folderId
      ? dispatch(getLinkList({ userId, folderId: Number(folderId) }))
      : dispatch(getAllLinkList(userId));
  };

  useEffect(() => {
    if (userId) fetchFolderList();
  }, [userId]);

  useEffect(() => {
    if (userId) fetchLinkList();
  }, [router, userId]);

  return (
    <AppLayout>
      <FolderLayout
        AddLink={<AddLink />}
        Search={
          <Search
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Folder={
          <Folder
            currentFolder={currentFolder}
            setCurrentFolder={setCurrentFolder}
          />
        }
        Card={
          searchKeyword && searchResult.length >= 1 ? (
            <Card linkList={searchResult} />
          ) : (
            <Card
              linkList={linkList}
              currentFolder={currentFolder}
              setCurrentFolder={setCurrentFolder}
            />
          )
        }
      />
    </AppLayout>
  );
};

export default FolderPage;
