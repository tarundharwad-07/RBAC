import React, { useState } from 'react';

const UserFormModal = ({ onSubmit, user = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    role: user.role || '',
    status: user.status || 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEditing ? 'Edit User' : 'Add User'}</h5>
            <button className="btn-close"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control mb-2"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-2"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="role"
              className="form-control mb-2"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            <select
              name="status"
              className="form-control"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFormModal;
