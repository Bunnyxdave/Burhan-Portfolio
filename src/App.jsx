import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import MyWork from "./pages/MyWork.jsx";

function AppRoutes() {
  const { pathname } = useLocation();
  const page =
    pathname === "/about"
      ? "about"
      : pathname === "/projects"
        ? "projects"
        : pathname === "/my-work"
          ? "my-work"
          : "home";

  useEffect(() => {
    const titles = {
      home: "Developer & Builder",
      about: "About",
      projects: "Projects",
      "my-work": "My Work",
    };
    document.title = `${titles[page]} — Burhan Nayeem`;
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteHeader page={page} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return <AppRoutes />;
}
