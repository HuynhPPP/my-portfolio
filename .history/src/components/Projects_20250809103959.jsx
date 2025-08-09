import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Dự án 1", desc: "Mô tả ngắn gọn", img: "https://via.placeholder.com/300" },
    { title: "Dự án 2", desc: "Mô tả ngắn gọn", img: "https://via.placeholder.com/300" },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Dự án</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={p.img} alt={p.title} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
