import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const apiUrl = `${url}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch folder data");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export default useFetchData;
