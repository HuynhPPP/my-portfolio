import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center w-full max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Liên hệ
      </motion.h2>
      <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
        <input type="text" placeholder="Tên của bạn" className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900" />
        <input type="email" placeholder="Email" className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900" />
        <textarea placeholder="Tin nhắn" rows="5" className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"></textarea>
        <button type="button" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
          Gửi
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-500">Hoặc liên hệ trực tiếp: <a className="text-blue-600 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
    </section>
  );
}
