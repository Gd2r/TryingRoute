import { createFileRoute, Link } from "@tanstack/react-router";
// CSS is in src/styles
import "../styles/Home.css";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="page-container">
      <h1 className="page-title">Home Page</h1>
      <p className="page-content">welcome to the home page</p>
      {/* Link is already using Tanstack Router's */}
      <Link to="/about">About</Link>
    </div>
  );
}
