import React, { createContext, useState } from 'react';
import { mockPermissions } from '../../utils/mockData';

export const PermissionContext = createContext();

const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState(mockPermissions);

  const updatePermissions = (roleId, newPermissions) => {
    setPermissions((prev) =>
      prev.map((perm) =>
        perm.roleId === roleId ? { ...perm, permissions: newPermissions } : perm
      )
    );
  };

  return (
    <PermissionContext.Provider value={{ permissions, updatePermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};

export default PermissionProvider;
