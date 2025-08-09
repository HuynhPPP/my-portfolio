import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Liên hệ
      </motion.h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Tên của bạn" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Tin nhắn" className="p-2 border rounded"></textarea>
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Gửi
        </button>
      </form>
    </section>
  );
}
