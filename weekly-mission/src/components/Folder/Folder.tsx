import React from "react";
import * as S from "./Folder.styled";
import { useState, useEffect, memo } from "react";
import SearchBar from "../Searchbar/Searchbar";
import FolderMenuList from "../FolderMenuList/FolderMenuList";
import FolderContent from "../FolderContent/FolderContent";
import AddButton from "../AddButton/AddButton";
import useFoldersByUserId from "../../hooks/useFoldersByUserId";

import { LinkData, fetchLinkData } from "../../services/fetchFolderLinksData";

export type FolderId = number | string | null;

const Folder = ({ folderId }: { folderId: FolderId }) => {
  const { data: foldersData, isLoading } = useFoldersByUserId(1);

  const [search, setSearch] = useState<string>("");

  const [activeButton, setActiveButton] = useState<FolderId>(null);
  const [allLinksData, setAllLinksData] = useState<LinkData | null>(null);
  const [activeFolderName, setActiveFolderName] = useState<string>("전체");

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

  const handleButtonClick = async (folderId: FolderId, folderName: string) => {
    if (folderId === activeButton) {
      return;
    }

    setActiveButton(folderId === "전체" ? null : folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredLink = (): LinkData[] => {
    if (!allLinksData) {
      return [];
    }

    if (search === "") {
      return [allLinksData];
    }

    const lowerSearch = search.toLowerCase();

    return [allLinksData].filter((link) => {
      return (
        (link.data.url && link.data.url.toLowerCase().includes(lowerSearch)) ||
        (link.data.title &&
          link.data.title.toLowerCase().includes(lowerSearch)) ||
        (link.data.description &&
          link.data.description.toLowerCase().includes(lowerSearch))
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
          folders={foldersData}
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
