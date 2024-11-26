import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3">
      <Link to="/" className="text-decoration-none h4 mb-4">RBAC Dashboard</Link>
      <Link to="/users" className="text-decoration-none mb-2">Users</Link>
      <Link to="/roles" className="text-decoration-none mb-2">Roles</Link>
      <Link to="/permissions" className="text-decoration-none">Permissions</Link>
    </div>
  );
};

export default Sidebar;
