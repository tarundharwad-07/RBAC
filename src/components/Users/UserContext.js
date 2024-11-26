import React, { createContext, useState } from 'react';
import { mockUsers } from '../../utils/mockData';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);

  const addUser = (user) => setUsers([...users, user]);
  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
