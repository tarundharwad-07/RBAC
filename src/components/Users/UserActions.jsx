import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import UserFormModal from './UserFormModal';

const UserActions = () => {
  const { addUser, editUser } = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddClick = () => {
    setIsEditing(false);
    setEditingUser(null);
    setModalVisible(true);
  };

  const handleEditClick = (user) => {
    setIsEditing(true);
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleModalSubmit = (user) => {
    if (isEditing) {
      editUser(editingUser.id, user);
    } else {
      addUser({ ...user, id: Date.now() });
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handleAddClick}>
          Add User
        </button>
      </div>

      {modalVisible && (
        <UserFormModal
          onSubmit={handleModalSubmit}
          onCancel={handleCancel}
          user={editingUser}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default UserActions;
