import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';

export default function Login() {
  const context = useContext(AuthContext);
  console.log(context);

  const handleLogin = (e) => {
    console.log(e);
    // context.authenticate(type);
  };

  return (
    <div className="login">
      <ul>
        <li><button onClick={handleLogin}>Login as Admin</button></li>
        <li><button onClick={handleLogin}>Login as Employee</button></li>
      </ul>
    </div>
  )
}
