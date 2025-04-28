// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { clearToken, isLoggedIn, saveToken } from '../services/authService';
import { apiLogin, apiRegister } from '../services/api';

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

  const register = async (email, password) => {
    const res = await apiRegister(email, password);
    if (res.status === 201 && res.token) {
      saveToken(res.token);
      setIsAuthenticated(true);
      return res;
    }
    return null;
  }

  const logout = () => {
    clearToken()
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
