import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Redirect } from 'react-router-dom';

export default function Profile() {
  const context = useContext(AuthContext);
  console.log('Profile', context);

  return (
    <div>
      <h1>Profile - {context.auth.user.name}</h1>
      {!context.auth.isLoggedIn && <Redirect to="/login" />}
    </div>
  );
};
