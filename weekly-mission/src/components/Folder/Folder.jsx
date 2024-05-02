import * as S from "./Folder.styled";
import { useState, useEffect, memo } from "react";
import SearchBar from "../Searchbar/Searchbar";
import FolderMenuList from "../FolderMenuList/FolderMenuList";
import FolderContent from "../FolderContent/FolderContent";
import AddButton from "../AddButton/AddButton";
import useFoldersByUserId from "../../hooks/useFoldersByUserId";

import { fetchLinkData } from "../../services/fetchFolderLinksData";

const Folder = ({ folderId }) => {
  const { data: foldersData, isLoading } = useFoldersByUserId();

  const [search, setSearch] = useState("");

  const [activeButton, setActiveButton] = useState(null);
  const [allLinksData, setAllLinksData] = useState(null);
  const [activeFolderName, setActiveFolderName] = useState("전체");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLinkData(folderId);
        setAllLinksData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [folderId]);

  const handleButtonClick = async (folderId, folderName) => {
    if (folderId === activeButton) {
      return;
    }

    setActiveButton(folderId === "전체" ? null : folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredLink = () => {
    if (!allLinksData) {
      return [];
    }

    if (search === "") {
      return allLinksData.data;
    }

    const lowerSearch = search.toLowerCase();

    return allLinksData.data.filter((link) => {
      return (
        (link.url && link.url.toLowerCase().includes(lowerSearch)) ||
        (link.title && link.title.toLowerCase().includes(lowerSearch)) ||
        (link.description &&
          link.description.toLowerCase().includes(lowerSearch))
      );
    });
  };

  const filteredLinks = getFilteredLink();

  if (isLoading) return <div>Loading...</div>;
  if (!foldersData) return null;

  return (
    <>
      <SearchBar value={search} onChange={onChangeSearch} />
      <S.FoldermenuToolbar>
        <FolderMenuList
          folders={foldersData.data}
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <AddButton />
      </S.FoldermenuToolbar>

      <FolderContent
        foldersData={foldersData}
        allLinksData={filteredLinks}
        activeFolderName={activeFolderName}
        activeFolderId={activeButton}
      />
    </>
  );
};

export default memo(Folder);
