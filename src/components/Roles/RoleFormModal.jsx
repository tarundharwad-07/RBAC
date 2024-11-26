import React, { useState } from 'react';

const RoleFormModal = ({ onSubmit, role = {}, isEditing = false }) => {
  const [formData, setFormData] = useState({
    name: role.name || '',
    description: role.description || '',
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
            <h5 className="modal-title">{isEditing ? 'Edit Role' : 'Add Role'}</h5>
            <button className="btn-close"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              placeholder="Role Name"
              className="form-control mb-2"
              value={formData.name}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              className="form-control mb-2"
              value={formData.description}
              onChange={handleChange}
            />
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

export default RoleFormModal;
