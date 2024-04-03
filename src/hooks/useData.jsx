import { useEffect, useState } from "react";

/** 비동기 함수를 받아와서 데이터를 저장하는 함수 */
function useData(asyncFunction) {
  const [data, setData] = useState(null);

  async function updateData() {
    const result = await asyncFunction();
    setData(result);
  }

  useEffect(() => {
    updateData();
  }, []);

  return data;
}

export default useData;
