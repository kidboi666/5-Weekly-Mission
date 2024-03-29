import { createContext, useEffect, useState } from "react";
import { getUser } from "../api";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  const handleLoadUser = async () => {
    const nextUser = await getUser();
    setUser(nextUser);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
