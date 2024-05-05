import { useState, useEffect } from "react";

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title?: string;
  description?: string;
  imageSource?: string;
}

interface FolderData {
  folder: {
    id: number;
    name: string;
    count: number;
    owner: Owner;
    links: Link[];
  };
}

interface FolderListState {
  data: FolderData | null;
  isLoading: boolean;
}

const useFolderList = (): FolderListState => {
  const [data, setData] = useState<FolderData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/sample/folder`
        );
        const fetchedData: FolderData = await response.json();

        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching folders data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFolderList;
