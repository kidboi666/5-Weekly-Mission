import { useState, useEffect } from "react";

const useFoldersByUserId = (userId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/1/folders`
        );
        const fetchedData = await response.json();

        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching folders data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, isLoading };
};

export default useFoldersByUserId;
