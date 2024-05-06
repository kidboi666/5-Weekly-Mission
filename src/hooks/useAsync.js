import { useCallback, useState } from "react";

function useAsync(asyncFuction) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        return await asyncFuction(...args);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [asyncFuction]
  );

  return [loading, error, data, wrappedFunction];
}

export default useAsync;
