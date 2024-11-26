import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserTable = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                {user.status}
              </span>
            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
