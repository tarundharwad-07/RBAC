import React, { useContext } from 'react';
import { RoleContext } from './RoleContext';

const RoleTable = () => {
  const { roles, deleteRole } = useContext(RoleContext);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Role Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td>{role.name}</td>
            <td>{role.description}</td>
            <td>
              <button className="btn btn-primary btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteRole(role.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
