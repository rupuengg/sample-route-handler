import React from 'react';

export const AuthState = {
  isLoggedIn: false,
  user: {}
};

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{
      ...AuthState, authenticate: (user) => {
        console.log('Login', user);
      },
      logout: () => {
        console.log('Logout');
      }
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};