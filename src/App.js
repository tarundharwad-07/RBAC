import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirect
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import UsersPage from './pages/UsersPage';
import RolesPage from './pages/RolesPage';
import PermissionsPage from './pages/PermissionsPage';
import UserProvider from './components/Users/UserContext';
import RoleProvider from './components/Roles/RoleContext';
import PermissionProvider from './components/Permissions/PermissionContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <RoleProvider>
          <PermissionProvider>
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1">
                <Navbar />
                <div className="container mt-4">
                  <Routes>
                    {/* Redirect from / to /users */}
                    <Route path="/" element={<Navigate to="/users" />} />
                    
                    {/* Explicit /users route */}
                    <Route path="/users" element={<UsersPage />} />
                    
                    <Route path="/roles" element={<RolesPage />} />
                    <Route path="/permissions" element={<PermissionsPage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </PermissionProvider>
        </RoleProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
