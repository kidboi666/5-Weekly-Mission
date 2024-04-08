import { useState, useEffect } from "react";

export function useAsync(asyncFuction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFuction = async () => {
    setData(null);
    setLoading(true);
    setError(null);

    try {
      const response = await asyncFuction();
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    wrappedFuction(data, loading, error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
