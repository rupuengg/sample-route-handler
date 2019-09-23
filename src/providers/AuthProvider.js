import React, { useState } from 'react';

export const AuthState = {
  isLoggedIn: false,
  user: {}
};

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(AuthState);

  const authenticate = (userType) => {
    setAuth({
      isLoggedIn: true,
      user: {
        name: userType.charAt(0).toUpperCase() + userType.substring(1),
        type: userType
      }
    });
  };

  const logout = () => {
    setAuth({
      isLoggedIn: false,
      user: {}
    });
  };

  return (
    <AuthContext.Provider value={{ auth, authenticate, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};