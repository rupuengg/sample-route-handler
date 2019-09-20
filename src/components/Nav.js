import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
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
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
