import { Outlet } from "@tanstack/react-router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import SharedLayout from "./pages/SharedLayout";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      {/* SharedLayout likely contains navigation, keep it */}
      <SharedLayout />
      {/* Wrap Outlet in a main tag to apply centering/padding */}
      <main style={{ textAlign: "center", padding: "2rem", flexGrow: 1 }}>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      <Footer />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SharedLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NotFoundPage />} />
    //     </Route>
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
