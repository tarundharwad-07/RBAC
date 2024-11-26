import React from 'react';
import UserTable from '../components/Users/UserTable';
import UserActions from '../components/Users/UserActions';

const UsersPage = () => {
  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <UserActions />
      <UserTable />
    </div>
  );
};

export default UsersPage;
