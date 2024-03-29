import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("fetch에 실패했습니다.");
      setData(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
