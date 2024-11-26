import React, { createContext, useState } from 'react';
import { mockRoles } from '../../utils/mockData';

export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState(mockRoles);

  const addRole = (role) => setRoles([...roles, role]);
  const editRole = (id, updatedRole) => {
    setRoles(roles.map((role) => (role.id === id ? updatedRole : role)));
  };
  const deleteRole = (id) => setRoles(roles.filter((role) => role.id !== id));

  return (
    <RoleContext.Provider value={{ roles, addRole, editRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
