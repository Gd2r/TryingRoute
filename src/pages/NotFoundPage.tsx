import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Not Found</h1>
      <p className="notfound-text">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="notfound-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
