import React, { createContext, useState } from 'react';

interface layoutContextType {
  isLoggedIn?: boolean;
  setIsLoggedIn?: (show: boolean) => void | undefined;
  headerShow?: boolean;
  setHeaderShow?: (show: boolean) => void | undefined;
  footShow?: boolean;
  setFootShow?: (show: boolean) => void | undefined;
}

export const LayoutContext = createContext<layoutContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  headerShow: true,
  setHeaderShow: () => {},
  footShow: true,
  setFootShow: () => {},
});

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [headerShow, setHeaderShow] = useState(true);
  const [footShow, setFootShow] = useState(true);

  return <LayoutContext.Provider value={{ headerShow, setHeaderShow, footShow, setFootShow, isLoggedIn, setIsLoggedIn }}>{children}</LayoutContext.Provider>;
}
