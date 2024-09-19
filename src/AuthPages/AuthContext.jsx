import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(() => localStorage.getItem('token'));

  const login = (token) => {
    setUserToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUserToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
