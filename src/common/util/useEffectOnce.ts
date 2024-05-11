import { useEffect } from "react";

export const useEffectOnce = (callback: () => Promise<any>): void => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
