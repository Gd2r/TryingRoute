import { createFileRoute } from "@tanstack/react-router";
// CSS is in src/styles
import "../styles/Contact.css";

export const Route = createFileRoute("/contact")({
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact</h1>
      <p className="page-content">This is the contact page.</p>
    </div>
  );
}
