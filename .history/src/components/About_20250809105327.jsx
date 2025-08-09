import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 w-full max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Về tôi
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tôi là một lập trình viên yêu thích xây dựng những website hiện đại với trải nghiệm mượt mà và đẹp mắt.
      </motion.p>
    </section>
  );
}
