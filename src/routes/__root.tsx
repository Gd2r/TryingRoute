import { createRootRoute, Outlet } from "@tanstack/react-router";
import SharedLayout from "../components/SharedLayout";
import Footer from "../components/Footer";
import NotFoundPage from "../components/NotFoundPage";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage, // Keep NotFound here
});

function RootComponent() {
  return (
    <>
      <SharedLayout />
      <main style={{ textAlign: "center", padding: "2rem", flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
