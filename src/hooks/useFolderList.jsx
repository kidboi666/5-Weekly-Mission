import { useEffect, useState } from "react";
const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export function useFolderList() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}users/1/links`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("불러오는데 실패 했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
