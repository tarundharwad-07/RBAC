import React, { useContext, useState } from 'react';
import { PermissionContext } from './PermissionContext';

const PermissionGrid = ({ roleId }) => {
  const { permissions, updatePermissions } = useContext(PermissionContext);
  const rolePermissions = permissions.find((perm) => perm.roleId === roleId);

  const [currentPermissions, setCurrentPermissions] = useState(rolePermissions.permissions);

  const togglePermission = (perm) => {
    setCurrentPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  const handleSave = () => {
    updatePermissions(roleId, currentPermissions);
  };

  return (
    <div>
      <h5>Manage Permissions</h5>
      <div>
        {['Read', 'Write', 'Delete'].map((perm) => (
          <div key={perm}>
            <input
              type="checkbox"
              id={perm}
              checked={currentPermissions.includes(perm)}
              onChange={() => togglePermission(perm)}
            />
            <label htmlFor={perm} className="ms-2">{perm}</label>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default PermissionGrid;
