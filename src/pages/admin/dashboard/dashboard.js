import './dashboard.css'
import React, { useState } from 'react';

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Toggle sub-menu visibility
  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle between showing and hiding
  };

  return (
    <div className="container-dashboard">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="toggle-button" onClick={toggleSidebar}>
            {isCollapsed ? '→' : '←'}
          </div>
          <p className="username">{!isCollapsed && 'Welcome!'}</p>
        </div>

        <ul className="menu">
          <li onClick={() => toggleSubMenu('dashboard')}>Dashboard</li>
          <li onClick={() => toggleSubMenu('userManagement')}>User Management</li>
             {/* Sub-menu for User Management */}
          <ul className={`submenu ${activeMenu === 'userManagement' ? 'show' : ''}`}>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
            <li>Sub-item 3</li>
          </ul>



          <li onClick={() => toggleSubMenu('branchManagement')}>Branch Management</li>
          <li onClick={() => toggleSubMenu('usageStatistics')}>Usage Statistics</li>

          <li onClick={() => toggleSubMenu('apiDocumentation')}>Api Documentation</li>
          {/* Sub-menu for API Documentation */}
          <ul className={`submenu ${activeMenu === 'apiDocumentation' ? 'show' : ''}`}>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
            <li>Sub-item 3</li>
          </ul>

          <li onClick={() => toggleSubMenu('credentials')}>Credentials</li>
          <li onClick={() => toggleSubMenu('apiStatus')}>API Endpoint Status</li>
          <li onClick={() => toggleSubMenu('rolesPermissions')}>Roles and Permissions</li>
          <li onClick={() => toggleSubMenu('history')}>History</li>
          <li onClick={() => toggleSubMenu('activityLogs')}>Activity Logs</li>
        </ul>
        
        <button className="logout">Log Out</button>
      </aside>

      <main className="content">
        <header>
          <h1>Partner Management</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search Partner" />
            <select>
              <option>Status: All</option>
            </select>
            <select>
              <option>Filters: All</option>
            </select>
            <button>Add Partner</button>
          </div>
        </header>
        <table className="partner-table">
          <thead>
            <tr>
              <th>S.n</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><span className="logo-icon">👤</span></td>
              <td>Test</td>
              <td>A</td>
              <td>Kamaladi</td>
              <td>99898</td>
              <td><span className="status active">●</span></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
