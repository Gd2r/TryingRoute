import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/SharedLayout.css"; // We will create this CSS file next

// Layout component including Navbar structure
function SharedLayout() {
  return (
    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      {/* Main container for the layout */}
      {/* Navbar structure copied here */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            {/* Explicit root path for Home link */}
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Outlet renders the matched child route component */}
      <main>
        <Outlet />
      </main>
      {/* Optional: Add a Footer or other common elements here */}
    </div>
  );
}

export default SharedLayout;
