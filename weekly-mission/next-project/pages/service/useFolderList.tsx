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
          `${process.env.NEXT_PUBLIC_BASE_URL}/sample/folder`
        );
        const fetchedData = await response.json();

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching folders data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFolderList;
