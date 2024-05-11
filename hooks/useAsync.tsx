import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

export const useAsync = <T,>(
  asyncFunction: () => Promise<AxiosResponse<T>>
) => {
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const asyncData = async () => {
    setData(null); // 데이터 초기화
    setError(null); // 에러 초기화
    setLoading(true);

    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트가 마운트되면 실행
  useEffect(() => {
    asyncData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asyncData, loading, error, data };
};
