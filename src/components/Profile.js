import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile() {
  const isLoggedIn = false;
  return (
    <div>
      <h1>Profile</h1>
      {!isLoggedIn && <Redirect to="/login" />}
    </div>
  );
};
