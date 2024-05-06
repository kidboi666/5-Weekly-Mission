import React from "react";
import ConHeader from "../components/ConHeader/ConHeader";
import Search from "../components/Search/Search";
import CardList from "../components/CardList/CardList";
import { useEffect, useState } from "react";
import { fetchData } from "../fetchUtils";

interface FolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
  }[];
  count: number;
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

  return (
    <div className="content-wrap">
      <ConHeader folderData={folderData} />
      <div className="wrap">
        <Search />
        <CardList cardListData={cardListData} />
      </div>
    </div>
  );
}

export default Shared;
