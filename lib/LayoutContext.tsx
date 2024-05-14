import React, { createContext,  useState } from "react";

interface layoutContextType {
  headerShow?: boolean;
  setHeaderShow?: (show: boolean) => void | undefined;
  footShow?:boolean;
  setFootShow?: (show: boolean) => void | undefined;
}

export const LayoutContext = createContext<layoutContextType>({
  headerShow: false,
  setHeaderShow: () => {},
  footShow: false,
  setFootShow: () => {},
});

export default function LayoutProvider({ children }:{ children:React.ReactNode }) {
  const [headerShow, setHeaderShow] = useState(true);
  const [footShow, setFootShow] = useState(true);

  return (
    <LayoutContext.Provider value={{ headerShow, setHeaderShow, footShow, setFootShow }}>
      { children }
    </LayoutContext.Provider>
  )
}