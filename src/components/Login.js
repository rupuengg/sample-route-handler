import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';

export default function Login(props) {
  const context = useContext(AuthContext);
  console.log(context, props);

  const handleLogin = (userType) => {
    context.authenticate(userType);
    props.history.push('/profile');
  }

  return (
    <div className="login">
      <ul>
        <li><button onClick={() => handleLogin('admin')}>Login as Admin</button></li>
        <li><button onClick={() => handleLogin('employee')}>Login as Employee</button></li>
      </ul>
    </div>
  )
}
