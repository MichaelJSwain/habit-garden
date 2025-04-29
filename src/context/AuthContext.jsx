// src/context/AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import { clearToken, fetchCurrentUser, isLoggedIn, saveToken } from '../services/authService';
import { apiLogin, apiRegister } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(!!isLoggedIn());

  useEffect(() => {
    const init = async () => {
      try {
        const user = await fetchCurrentUser();
        setUser(user);
        setIsAuthenticated(true);
      } catch (err) {
        clearToken();
        setUser(null);
        setIsAuthenticated(false);
      }
    }
    init();
  }, []);

  const login = async (email, password) => {
    const {token, user} = await apiLogin(email, password);
    if (token && user) {
      saveToken(token);
      setIsAuthenticated(true);
      setUser(user);
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
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
