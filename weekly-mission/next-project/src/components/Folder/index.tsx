import React from "react";
import { useState, useEffect, memo } from "react";
import SearchBar from "@components/Searchbar";
import FolderMenuList from "@components/FolderMenuList";
import FolderContent from "@components/FolderContent";
import AddButton from "@components/AddButton";
import { fetchLinkData } from "@api/fetchFolderLinksData";
import useFoldersByUserId from "@api/useFoldersByUserId";
import styles from "./Folder.module.css";

export type FolderId = number | string | null;

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
