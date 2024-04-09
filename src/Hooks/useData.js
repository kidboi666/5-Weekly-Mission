import { useCallback, useState } from 'react';

export function useData(asyncFunction) {
  const [Data, setData] = useState(null);

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

  return [Data, getData];
}
