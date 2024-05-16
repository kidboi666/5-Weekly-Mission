import useUserFolders from "@/hooks/useUserFolders";
import { useEffect, useState } from "react";
import LinkCardListByFolderId from "./LinkCardListByFolderId";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import axios from "axios";
import ShareFolderModal from "./ShareFolderModal";
import AddFolderModal from "./AddFolderModal";
import EditFolderModal from "./EditFolderModal";
import DeleteFolderModal from "./DeleteFolderModal";
import FolderButtons from "./FolderButtons";

interface UserData {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

interface Folder {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite?: boolean;
}

interface Link {
  id: string;
  created_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export default function FolderMain({
  user,
  inputValue,
}: {
  user: UserData | null;
  inputValue: string;
}) {
  if (!user) {
    return <div>Loading...</div>;
  }
  const [title, setTitle] = useState<string>("전체");
  const [clickedButton, setClickedButton] = useState<number | null>(0);
  const [folderId, setFolderId] = useState<number>(0);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);
  const [modalStates, setModalStates] = useState<{
    addModal: boolean;
    shareModal: boolean;
    editModal: boolean;
    deleteModal: boolean;
    addLinkModal: boolean;
    deleteLinkModal: boolean;
  }>({
    addModal: false,
    shareModal: false,
    editModal: false,
    deleteModal: false,
    addLinkModal: false,
    deleteLinkModal: false,
  });

  const { data: folders } = useUserFolders(user.id);
  const { data: links } = useSWR(
    () =>
      folderId === 0
        ? `https://bootcamp-api.codeit.kr/api/users/${user.id}/links`
        : `https://bootcamp-api.codeit.kr/api/users/${user.id}/links?folderId=${folderId}`,
    fetcher
  );

  const openModal = (modal: keyof typeof modalStates) => {
    setModalStates({ ...modalStates, [modal]: true });
  };

  const closeModal = (modal: keyof typeof modalStates) => {
    setModalStates({ ...modalStates, [modal]: false });
  };

  const handleButtonClick = (folderId: number) => {
    setClickedButton(folderId);
    const clickedFolder = folders.data.find(
      (folder: Folder) => folder.id === folderId
    );
    if (clickedFolder) {
      setFolderId(clickedFolder.id);
      setTitle(clickedFolder.name);
    }
  };

  const handleAllButtonClick = () => {
    setClickedButton(0);
    setFolderId(0);
    setTitle("전체");
  };

  const getInputValue = async () => {
    const response = await axios.post("/api/input", { inputValue });

    return response.data;
  };

  const handleFilter = async () => {
    if (links) {
      const i = await getInputValue();
      const nextLinks = links.data.filter(
        (link: any) =>
          (link.url && link.url.includes(i)) ||
          (link.title && link.title.includes(i)) ||
          (link.description && link.description.includes(i))
      );

      setFilteredLinks(nextLinks);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [inputValue]);

  return (
    <>
      <FolderButtons
        clickedButton={clickedButton}
        handleAllButtonClick={handleAllButtonClick}
        folders={folders}
        handleButtonClick={handleButtonClick}
        openModal={openModal}
        closeModal={closeModal}
        modalStates={modalStates}
      />
      <div className="flex items-center justify-between mt-[40px] px-[32px] xl:px-[200px]">
        <div className="text-[30px] font-bold">{title}</div>
        <div className="flex space-x-2">
          {title !== "전체" ? (
            <>
              <ShareFolderModal
                openModal={openModal}
                closeModal={closeModal}
                modalStates={modalStates}
              />
              <EditFolderModal
                openModal={openModal}
                closeModal={closeModal}
                modalStates={modalStates}
              />
              <DeleteFolderModal
                openModal={openModal}
                closeModal={closeModal}
                modalStates={modalStates}
              />
            </>
          ) : null}
        </div>
      </div>
      <LinkCardListByFolderId
        links={links?.data}
        filteredLinks={filteredLinks}
        inputValue={inputValue}
        modalStates={modalStates}
        setModalStates={setModalStates}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}
