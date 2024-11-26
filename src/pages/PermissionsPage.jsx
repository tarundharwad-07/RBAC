import React from 'react';
import PermissionGrid from '../components/Permissions/PermissionGrid';

const PermissionsPage = () => {
  return (
    <div className="container mt-4">
      <h2>Permissions</h2>
      <PermissionGrid roleId={1} /> {/* Pass specific roleId */}
    </div>
  );
};

export default PermissionsPage;
