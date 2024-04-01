import { useState } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('네트워크 응답 오류!');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
}

export default useFetchData;
