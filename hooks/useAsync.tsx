import { useState, useEffect } from "react";

export const useAsync = (asyncFunction: () => Promise<any>) => {
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const asyncData = async () => {
    setError(null); // 에러 초기화
    setData(null); // 데이터 초기화

    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  // 컴포넌트가 마운트되면 실행
  useEffect(() => {
    asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asyncData, error, data };
};
