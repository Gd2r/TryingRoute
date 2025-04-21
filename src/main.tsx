import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";

// Create a root route
const rootRoute = createRootRoute({
  component: App, // App component now acts as the layout shell
  notFoundComponent: NotFoundPage, // Define NotFound here
});

// Create child routes
const indexRoute = createRoute({
  // Matches "/"
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Note: Tanstack Router handles "Not Found" differently.
// We'll configure a default notFoundComponent on the router later.

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute]);

// Create the router instance
const router = createRouter({
  routeTree,
  // notFoundComponent: NotFoundPage, // Removed from here
});

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
