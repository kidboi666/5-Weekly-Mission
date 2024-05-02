import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string) {
  const [value, setValue] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fromDate() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setValue(result);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fromDate();
  }, [url]);

  return { value, isLoading, error };
}
