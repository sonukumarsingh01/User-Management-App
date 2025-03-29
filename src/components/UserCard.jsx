import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user, onDelete }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={user.avatar} className="card-img-top" alt={`${user.first_name} avatar`} />
        <div className="card-body">
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <p className="card-text">{user.email}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/edit/${user.id}`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;