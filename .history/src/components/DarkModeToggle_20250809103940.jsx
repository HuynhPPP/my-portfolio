import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg transition"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
}
