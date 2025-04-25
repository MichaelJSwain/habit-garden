// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const userDB = [
  {
      email: "dave@mail.com",
      password: "dave99"
  },
  {
      email: "tim@yahoo.com",
      password: "timtam"
  },
  {
      email: "sarah@mail.co.uk",
      password: "avocado"
  },
];


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    console.log("logging in via context");
    // check if user details match user details in fake DB
    const foundUser = userDB.find(user => user.email === email && user.password === password);
    if (foundUser) {
      localStorage.setItem('user', userContext);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
