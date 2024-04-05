import { useState, useEffect } from 'react';
import fetchData from '../apis/GetApi';

function useFetch(url, method) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      const result = await fetchData(url, method);
      setData(result.data);
      setIsLoading(false);
      setError(result.error);
    };

    fetchUrl();
  }, [url, method]);

  return { data, isLoading, error };
}

export default useFetch;
