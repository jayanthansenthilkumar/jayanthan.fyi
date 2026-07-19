import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

import { ScrollToTop } from "./components/ScrollToTop.tsx";

import { GoToTop } from "./components/GoToTop.tsx";

// Pages
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Blogs from "./pages/Blogs.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      document.title = "Jayanthan | Portfolio";
    } else if (path === "/about") {
      document.title = "About | Jayanthan";
    } else if (path === "/projects") {
      document.title = "Projects | Jayanthan";
    } else if (path === "/blogs") {
      document.title = "Blogs | Jayanthan";
    } else if (path === "/contact") {
      document.title = "Contact | Jayanthan";
    } else if (path === "/resume") {
      document.title = "Resume | Jayanthan";
    }
    // The individual blog post title is handled directly in BlogDetail.tsx
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
      <ScrollToTop />
      <GoToTop />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-grow flex flex-col"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
