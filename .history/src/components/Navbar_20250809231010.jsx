import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur bg-white/70 dark:bg-[#0f0b1a]/70 shadow"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-bold text-lg">
          <span className="text-sky-700 dark:text-violet-300">Huynh</span>PPP
        </a>
        <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <FaBars />
        </button>
        <ul className="hidden sm:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-sky-600 dark:hover:text-violet-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden px-4 pb-3 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-2 hover:text-sky-600 dark:hover:text-violet-300" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}


