import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';

export default function Home() {
  const context = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <p>{context.auth.isLoggedIn.toString()}</p>
    </div>
  );
};
