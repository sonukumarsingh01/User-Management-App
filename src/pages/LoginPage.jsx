import React from 'react';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setToken }) {
  const navigate = useNavigate();

  const handleLogin = (token) => {
    setToken(token);
    navigate('/users');
  };

  return <Login onLogin={handleLogin} />;
}

export default LoginPage;