import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const context = useContext(AuthContext);
  console.log('Nav', context, props);

  const handleLogout = (e) => {
    e.preventDefault();
    context.logout();
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Home</Link></li>
        <li><Link to="/admin/employee">Admin Employee</Link></li>
        <li><Link to="/employee">Employee Home</Link></li>
        <li><Link to="/employee/view">Employee View</Link></li>
        <li><Link to="/errors">Route doesn't exist</Link></li>
      </ul>
      {context.auth.isLoggedIn
        ? <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
        </ul>
        : <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>}
    </nav>
  )
}
