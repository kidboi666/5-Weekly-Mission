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
    setIsLoggedIn(null);
  };

  return <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
}
