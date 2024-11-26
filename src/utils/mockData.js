export const mockUsers = [
    { id: 1, name: 'Tarun', email: 'tarun@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Vinayak', email: 'vinayak@gmail.com', role: 'Editor', status: 'Inactive' },
  ];
  
  export const mockRoles = [
    { id: 1, name: 'Admin', description: 'Full access to the system' },
    { id: 2, name: 'Editor', description: 'Can edit content' },
  ];
  
  export const mockPermissions = [
    { roleId: 1, permissions: ['Read', 'Write', 'Delete'] },
    { roleId: 2, permissions: ['Read', 'Write'] },
  ];
  