import { createFileRoute } from "@tanstack/react-router";
import "../styles/About.css";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="page-container">
      <h1 className="page-title">About</h1>
      <p className="page-content">welcome to the about page</p>
    </div>
  );
}
