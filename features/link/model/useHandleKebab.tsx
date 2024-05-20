import React, { useEffect, useRef, useState } from "react";

const useHandleKebab = () => {
  const [isOpenKebab, setIsOpenKebab] = useState(false);
  const kebabRef: any = useRef(null);

  const handleIsOpenKebab = () => {
    setIsOpenKebab((prev) => !prev);
  };

  useEffect(() => {
    const handleToggleKebab = (e: any) => {
      const ref = !kebabRef.current?.contains(e.target);

      if (ref) {
        setIsOpenKebab(false);
      }
      //   ref && setIsOpenKebab(false);
    };

    window.addEventListener("click", handleToggleKebab);

    return () => {
      window.removeEventListener("click", handleToggleKebab);
    };
  }, []);

  return { isOpenKebab, handleIsOpenKebab, kebabRef };
};

export default useHandleKebab;
