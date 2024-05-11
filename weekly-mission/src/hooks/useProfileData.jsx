import { useState, useEffect } from "react";

const useProfileData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/sample/user`
        );
        const fetchedData = await response.json();

        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Profile data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useProfileData;
