import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Add useEffect to handle the initial check

export const Login = () => {
  const location = useLocation();
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const redirectpath = location.state?.path || '/';
  const auth = useAuth();

  // Redirect to profile page if the user is already authenticated
  // useEffect(() => {
  //   if (auth.user) {
  //     navigate(redirectpath, { replace: true });
  //   }
  // }, [auth.user, navigate, redirectpath]);

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectpath, { replace: true });
  };

  return (
    <div>
      <label>
        username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
