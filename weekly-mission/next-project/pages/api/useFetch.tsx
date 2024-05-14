import { useState, useEffect } from "react";

type Props = {
  url: string;
  error: string;
  userId?: string;
};

const useFetch = ({ url, ...args }: Props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${url}`
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
  }, [args]);

  return { data, isLoading };
};

export default useFetch;
