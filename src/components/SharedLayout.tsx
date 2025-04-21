import { Link } from "@tanstack/react-router";
import "../styles/SharedLayout.css"; // Path relative to src/components

// Layout component including Navbar structure
function SharedLayout() {
  return (
    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      {/* Main container for the layout */}
      {/* Navbar structure copied here */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            {/* Use the defined route path */}
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            {/* Use the defined route path */}
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            {/* Use the defined route path */}
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          {/* Add link to Posts page */}
          <li className="navbar-item">
            <Link to="/posts" className="navbar-link">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      {/* Outlet is removed from here because it's now in App.tsx */}
      {/* <main>
        <Outlet />
      </main> */}
      {/* Optional: Add a Footer or other common elements here */}
    </div>
  );
}

export default SharedLayout;
