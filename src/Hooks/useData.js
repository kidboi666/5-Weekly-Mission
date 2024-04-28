import { useCallback, useState } from "react";

export function useData(asyncFunction) {
  const [data, setData] = useState(null);

  const getData = useCallback(
    async (value = null) => {
      try {
        const result = await asyncFunction(value);
        setData(result);
      } catch (err) {
        console.log(err);
        setData(null);
      }
    },
    [asyncFunction]
  );

  return [data, getData];
}
