import { useEffect, useState, useCallback } from "react";

/** 폴더리스트에서 url을 받아서 데이터를 리턴하는 함수 */
function useSelectFolder({ url }) {
  const [data, setData] = useState(null);

  const getLinkData = useCallback(async ({ url }) => {
    try {
      const response = await fetch(`${url}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("내용 불러오기 실패!");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await getLinkData({ url });
      setData(result);
    }
    fetchData();
  }, [url, getLinkData]);

  return data;
}

export default useSelectFolder;
