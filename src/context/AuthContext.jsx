// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { clearToken, isLoggedIn, saveToken } from '../services/authService';
import { apiLogin } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!isLoggedIn());

  const login = async (email, password) => {
    const token = await apiLogin(email, password);
    if (token) {
      saveToken(token);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    clearToken()
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
