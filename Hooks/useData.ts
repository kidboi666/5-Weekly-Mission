import { useCallback, useState } from "react";

export function useData(
  asyncFunction: (pram?: string | number) => Promise<any>
) {
  const [data, setData] = useState<any>(null);

  const getData = useCallback(
    async (value?: string | number) => {
      try {
        const result = await asyncFunction(value);
        setData(result);
      } catch (err) {
        setData(null);
      }
    },
    [asyncFunction]
  );

  return [data, getData] as [any, (value?: string | number) => Promise<void>];
}
