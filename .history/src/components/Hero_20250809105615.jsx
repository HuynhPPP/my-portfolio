import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 w-full max-w-6xl mx-auto">
      <motion.img
        src={reactLogo}
        alt="Avatar"
        loading="eager"
        className="w-40 h-40 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-white p-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold mt-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi 👋, I'm <span className="text-blue-500">{profile.name}</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {profile.headline}
      </motion.p>
    </section>
  );
}
