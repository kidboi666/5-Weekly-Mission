import { useState } from "react";
import { useEffect } from "react";

export const useAsync = (asyncFunction) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const asyncData = async () => {
    setError(null);
    setData(null);

    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asyncData, error, data };
};
