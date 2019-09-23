import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Redirect } from 'react-router-dom';

export default function Profile() {
  const context = useContext(AuthContext);

  return (
    <div>
      <h1>Profile - {context.auth.user.name}</h1>
      <h3>Type - {context.auth.user.type}</h3>
      {!context.auth.isLoggedIn && <Redirect to="/login" />}
    </div>
  );
};
