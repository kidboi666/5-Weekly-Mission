import React, { createContext, useState } from 'react';

type login = string | null;

interface layoutContextType {
  isLoggedIn: login;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<layoutContextType>({
  isLoggedIn: null,
  handleLogin: (token: string) => {},
  handleLogout: () => {},
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<login>(null);

  const handleLogin = (token: string) => {
    document.cookie = `accessToken=${token}`;
    setIsLoggedIn(token);
  };
  const handleLogout = () => {
    document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setIsLoggedIn(null);
  };

  return <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
}
