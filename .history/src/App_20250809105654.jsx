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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
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
