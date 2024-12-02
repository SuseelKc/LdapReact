import './dashboard.css'
import React, { useState } from 'react';
export default function Dashboard(){

    const [isCollapsed, setIsCollapsed] = useState(false);

    // Toggle sidebar
    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
    };

    return(
        <div className="container-dashboard">
            <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isCollapsed ? '→' : '←'}
                </div>
        
                <p className="username">{!isCollapsed && 'Welcome!'}</p>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>User Management</li>
                    <li>Branch Management</li>
                    <li>Usage Statistics</li>
                    <li>Credentials</li>
                    <li>API Documentation</li>
                    <li>API Endpoint Status</li>
                    <li>Roles and Permissions</li>
                    <li>History</li>
                    <li>Activity Logs</li>
                </ul>
                {!isCollapsed && <button className="logout">Log Out</button>}
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
  


    )
}