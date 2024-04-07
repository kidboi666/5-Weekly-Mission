import { useEffect } from "react";
import { ROOT_ID } from "../../sharing/util/constant";

export const useBackgroundClick = (callback) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID);
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
