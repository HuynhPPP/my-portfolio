import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Projects() {
  const projects = profile.projects;

  return (
    <section id="projects" className="py-20 px-6 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg w-full aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600" />
            <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">{s}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="inline-block mt-3 text-blue-600 hover:underline">View project</a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
