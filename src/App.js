import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import EditPage from './pages/EditPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [users, setUsers] = useState([]); 

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <Router>
      <div className="container mt-4">
        <Navbar token={token} setToken={setToken} />
        <Routes>
          <Route exact path="/" element={
            token ? <Navigate to="/users" /> : <LoginPage setToken={setToken} />
          } />
          <Route path="/users" element={
            token ? <UsersPage token={token} setToken={setToken} users={users} setUsers={setUsers} /> : <Navigate to="/" />
          } />
          <Route path="/edit/:id" element={
            token ? <EditPage token={token} onUpdateUser={updateUser} /> : <Navigate to="/" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;