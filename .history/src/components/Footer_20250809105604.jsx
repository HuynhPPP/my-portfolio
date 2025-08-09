import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer({ socials, email }) {
  return (
    <footer className="mt-20 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} HuynhPPP. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xl">
          <a href={socials?.linkedin ?? "#"} aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href={socials?.portfolio ?? "#"} aria-label="Portfolio" className="hover:text-blue-600"><FaGlobe /></a>
          <a href={`mailto:${email}`} aria-label="Email" className="hover:text-blue-600"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}


