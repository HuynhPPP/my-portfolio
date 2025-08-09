import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer({ socials, email }) {
  return (
    <footer className="mt-20 py-10 border-t border-slate-200 dark:border-[#25183a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[clamp(0.85rem,2vw,0.95rem)]">© {new Date().getFullYear()} HuynhPPP. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xl">
          <a href={socials?.linkedin ?? "#"} aria-label="LinkedIn" className="hover:text-sky-600 dark:hover:text-violet-300"><FaLinkedin /></a>
          <a href={socials?.portfolio ?? "#"} aria-label="Portfolio" className="hover:text-sky-600 dark:hover:text-violet-300"><FaGlobe /></a>
          <a href={`mailto:${email}`} aria-label="Email" className="hover:text-sky-600 dark:hover:text-violet-300"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}


