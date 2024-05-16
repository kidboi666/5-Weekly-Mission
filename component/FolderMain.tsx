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
  const [folderId, setFolderId] = useState<number>(0);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);

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
      <div className="flex items-center justify-between mt-[40px] px-[32px] xl:px-[200px]">
        <div>
          <button
            className={`px-3 py-2 mr-2 border rounded-md ${
              clickedButton === 0
                ? "bg-blue-500 text-white"
                : "border-[#6D6AFE] text-black"
            }`}
            onClick={handleAllButtonClick}
          >
            전체
          </button>
          {folders &&
            folders.data.map((folder: Folder) => {
              return (
                <button
                  key={folder.id}
                  className={`px-3 py-2 mr-2 border rounded-md ${
                    folder.id === clickedButton
                      ? "bg-blue-500 text-white"
                      : "border-[#6D6AFE] text-black"
                  }`}
                  onClick={() => {
                    handleButtonClick(folder.id);
                  }}
                >
                  {folder.name}
                </button>
              );
            })}
        </div>
        <div
          className="text-[#6D6AFE] cursor-pointer"
          onClick={() => openModal("addModal")}
        >
          폴더 추가 +
        </div>
        <AddFolderModal modalStates={modalStates} closeModal={closeModal} />
      </div>
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
