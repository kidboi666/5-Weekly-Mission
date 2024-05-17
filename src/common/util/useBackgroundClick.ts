import { useEffect } from "react";
import { rootId } from "./constant";

export const useBackgroundClick = (callback) => {
  useEffect(() => {
    const rootElement = document.getElementById(rootId);
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
