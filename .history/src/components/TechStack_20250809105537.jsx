import { motion } from "framer-motion";

export default function TechStack({ stack }) {
  const Item = ({ label }) => (
    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
      {label}
    </span>
  );

  return (
    <section id="stack" className="py-20 px-6 w-full max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {stack.frontend.map((t) => (
              <Item key={t} label={t} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {stack.backend.map((t) => (
              <Item key={t} label={t} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Database & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {stack.tools.map((t) => (
              <Item key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


