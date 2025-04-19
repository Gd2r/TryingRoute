import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">Home Page</h1>
      <p className="page-content">welcome to the home page</p>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
