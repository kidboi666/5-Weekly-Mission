import { useEffect, useState } from "react";

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
