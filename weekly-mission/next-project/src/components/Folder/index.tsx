import React from "react";
import { useState, useEffect, memo } from "react";
import SearchBar from "@components/Searchbar";
import FolderMenuList from "@components/FolderMenuList";
import FolderContent from "@components/FolderContent";
import AddButton from "@components/AddButton";
import { fetchLinkData } from "pages/service/fetchFolderLinksData";
import { LinkData } from "pages/service/fetchFolderLinksData";
import useFoldersByUserId from "pages/service/useFoldersByUserId";
import styles from "./Folder.module.css";
import { get } from "http";

type FolderId = number | string | null;

interface FolderProps {
  folderId: string;
}

const Folder = ({ folderId }: FolderProps) => {
  const { data: foldersData, isLoading } = useFoldersByUserId(1);
  const [search, setSearch] = useState("");

  const [activeButtonId, setActiveButtonId] = useState<FolderId>(null);
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
    if (folderId === activeButtonId) {
      return;
    }

    setActiveButtonId(folderId === "전체" ? null : folderId);
    setActiveFolderName(folderName);
    const data = await fetchLinkData(folderId);
    setAllLinksData(data);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredLink = () => {
    if (!allLinksData || !allLinksData.data) {
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

  //if (isLoading) return <div>Loading...</div>;
  if (!foldersData) return null;

  return (
    <>
      <SearchBar value={search} onChange={onChangeSearch} />
      <div className={styles.foldermenu_toolbar}>
        <FolderMenuList
          folders={foldersData}
          activeButton={activeButtonId}
          handleButtonClick={handleButtonClick}
        />
        <AddButton />
      </div>

      <FolderContent
        foldersData={foldersData}
        allLinksData={filteredLinks}
        activeFolderName={activeFolderName}
        activeFolderId={activeButtonId}
      />
    </>
  );
};

export default memo(Folder);
