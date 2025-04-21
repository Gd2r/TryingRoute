import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Remove manual imports for pages and App.tsx if no longer needed directly here
// import App from "./App.tsx";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFoundPage from "./pages/NotFoundPage";

// Remove manual route definitions
// const rootRoute = ...
// const indexRoute = ...
// const aboutRoute = ...
// const contactRoute = ...
// const routeTree = rootRoute.addChildren(...);

// Create the router instance using the generated route tree
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
