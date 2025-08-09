import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { profile } from "./data/profile";

export default function App() {
  const getInitialDarkMode = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
    } catch {}
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      try { localStorage.setItem("theme", "dark"); } catch {}
    } else {
      root.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch {}
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-slate-900 dark:bg-[#0f0b1a] dark:text-slate-100">
      <Navbar />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <TechStack stack={profile.techStack} />
      <Projects />
      <Stats github={profile.github} />
      <Contact />
      <Footer socials={profile.socials} email={profile.email} />
    </div>
  );
}
