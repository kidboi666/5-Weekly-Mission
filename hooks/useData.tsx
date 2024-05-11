import { useCallback, useEffect, useState } from "react";

/** 비동기 함수를 받아와서 데이터를 저장하는 함수 */
function useData<T>(asyncFunction: () => Promise<T>): T | null {
  const [data, setData] = useState<T | null>(null);

  const updateData = useCallback(async () => {
    const result = await asyncFunction();
    setData(result);
  }, [asyncFunction]);

  useEffect(() => {
    updateData();
  }, [updateData]);

  return data;
}

export default useData;
