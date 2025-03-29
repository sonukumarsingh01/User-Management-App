import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditUser from '../components/EditUser';

function EditPage({ token, onUpdateUser }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (updatedUser) => {
    onUpdateUser(updatedUser);
    navigate('/users');
  };

  return <EditUser token={token} userId={id} onUpdate={handleUpdate} />;
}

export default EditPage;