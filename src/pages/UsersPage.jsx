import React, { useEffect } from 'react';
import UserList from '../components/UserList';
import { getUsers } from '../utils/api';

function UsersPage({ token, users, setUsers }) {
  useEffect(() => {
    const fetchInitialUsers = async () => {
      if (users.length === 0) { 
        try {
          const response = await getUsers(1);
          setUsers(response.data.data);
        } catch (err) {
          console.error('Error fetching initial users:', err);
        }
      }
    };
    fetchInitialUsers();
  }, [users, setUsers]);

  return (
    <div>
      <UserList token={token} users={users} setUsers={setUsers} />
    </div>
  );
}

export default UsersPage;