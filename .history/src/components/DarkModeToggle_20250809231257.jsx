import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Chuyển đổi chế độ sáng/tối"
      className="fixed top-4 right-4 z-50 p-2 rounded-full shadow-lg transition
      bg-sky-100 text-sky-700 hover:bg-sky-200
      dark:bg-[#2a1b3d] dark:text-violet-200 dark:hover:bg-[#3a2553]"
    >
      {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
    </button>
  );
}
