import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center w-full max-w-3xl mx-auto">
      <motion.h2
        className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Liên hệ
      </motion.h2>
      <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
        <input type="text" placeholder="Tên của bạn" className="p-3 border border-slate-300 dark:border-[#2a1b3d] rounded bg-white dark:bg-[#1b122a]" />
        <input type="email" placeholder="Email" className="p-3 border border-slate-300 dark:border-[#2a1b3d] rounded bg-white dark:bg-[#1b122a]" />
        <textarea placeholder="Tin nhắn" rows="5" className="p-3 border border-slate-300 dark:border-[#2a1b3d] rounded bg-white dark:bg-[#1b122a]"></textarea>
        <button type="button" className="bg-sky-600 text-white py-3 rounded hover:bg-sky-700 transition dark:bg-[#3a2553] dark:hover:bg-[#4a2f6b]">
          Gửi
        </button>
      </form>
      <p className="mt-6 text-[clamp(0.85rem,2vw,0.95rem)] text-slate-500">Hoặc liên hệ trực tiếp: <a className="text-sky-700 hover:underline dark:text-violet-300" href={`mailto:${profile.email}`}>{profile.email}</a></p>
    </section>
  );
}
