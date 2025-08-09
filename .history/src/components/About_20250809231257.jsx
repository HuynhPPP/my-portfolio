import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 w-full max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Về tôi
      </motion.h2>
      <motion.p
        className="text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {profile.about}
      </motion.p>
      <a href={`mailto:${profile.email}`} className="inline-block mt-6 text-sky-700 hover:underline dark:text-violet-300">{profile.email}</a>
    </section>
  );
}
