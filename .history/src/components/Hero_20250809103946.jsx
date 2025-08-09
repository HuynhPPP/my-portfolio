import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.img
        src="https://via.placeholder.com/150"
        alt="Avatar"
        className="w-40 h-40 rounded-full border-4 border-gray-300 dark:border-gray-600"
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
        Xin chào, tôi là <span className="text-blue-500">Tên của bạn</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Lập trình viên Web | Yêu thích UI/UX
      </motion.p>
    </section>
  );
}
