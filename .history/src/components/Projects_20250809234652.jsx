import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Projects() {
  const projects = profile.projects;

  return (
    <section id="projects" className="py-20 px-6 w-full max-w-6xl mx-auto">
      <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold mb-6">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-lg p-4 shadow-lg overflow-hidden bg-sky-50/60 dark:bg-[#171024]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg w-full aspect-video bg-gradient-to-br from-sky-100 to-sky-200 dark:from-[#2a1b3d] dark:to-[#3a2553]" />
            <h3 className="text-[clamp(1.05rem,2.5vw,1.25rem)] font-semibold mt-4">{p.title}</h3>
            <p className="text-[clamp(0.9rem,2vw,1rem)] text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-sky-100 text-sky-800 dark:bg-[#2a1b3d] dark:text-violet-200">{s}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="inline-block mt-3 text-sky-700 hover:underline dark:text-violet-300">View project</a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
