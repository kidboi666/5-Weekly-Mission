import React from "react";
import ConHeader from "@/src/components/ConHeader/ConHeader";
import Search from "@/src/components/Search/Search";
import CardList from "@/src/components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchData } from "@/src/fetchUtils/index";

interface FolderData {
  id: number;
  name: string;
  owner: FolderDataOwner;
  links: folderLinks[];
  count: number;
}
interface FolderDataOwner {
  id: number;
  name: string;
  profileImageSource: string;
}
interface folderLinks {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface CardListData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface FetchSharedResponse {
  cardListData: CardListData[];
  folderData: FolderData;
}

function Shared() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const [cardListData, setCardListData] = useState<CardListData[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  useEffect(() => {
    async function fetchDataAndSetState() {
      const response: FetchSharedResponse | undefined = await fetchData();
      if (response) {
        const { cardListData, folderData } = response;
        setFolderData(folderData);
        setCardListData(cardListData);
      }
    }
    fetchDataAndSetState();
  }, []);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="content-wrap">
      <ConHeader folderData={folderData} />
      <div className="wrap">
        <Search searchInputValue={searchInputValue} onChangeValue={onChangeValue} />
        <CardList cardListData={cardListData} searchInputValue={searchInputValue} />
      </div>
    </div>
  );
}

export default Shared;
