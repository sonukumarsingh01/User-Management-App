import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../utils/api';

function EditUser({ token, userId, onUpdate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(''); 
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(userId);
        const user = response.data.data;
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setAvatar(user.avatar); 
      } catch (err) {
        setMessage('Error fetching user data.');
      }
    };
    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setMessage('All fields are required.');
      return;
    }
    try {
      await updateUser(userId, { first_name: firstName, last_name: lastName, email }, token);
      setMessage('User updated successfully!');
      const updatedUser = { 
        id: parseInt(userId), 
        first_name: firstName, 
        last_name: lastName, 
        email,
        avatar 
      };
      setTimeout(() => {
        onUpdate(updatedUser);
      }, 1000);
    } catch (err) {
      setMessage('Error updating user.');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Edit User</h2>
        {message && (
          <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;