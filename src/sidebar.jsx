// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard Nav */}
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Components Nav */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Components</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            {/* Components links */}
            <li>
              <a href="components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Alerts</span>
              </a>
            </li>
            {/* Other component links */}
          </ul>
        </li>

        {/* Other sidebar sections */}
        {/* Pages Nav, Profile Nav, etc. */}
      </ul>
    </aside>
  );
};

export default Sidebar;
