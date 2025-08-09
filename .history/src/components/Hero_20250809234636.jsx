import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import { profile } from "../data/profile";
import Orb from "./Orb";

function useTypingEffect(text, speed = 70, pause = 1200) {
  const targetRef = useRef(null);
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let rafId;
    let timeoutId;
    const element = targetRef.current;
    if (!element) return;

    const tick = () => {
      const full = text;
      const current = element.textContent ?? "";

      if (!isDeleting) {
        element.textContent = full.slice(0, index + 1);
        index += 1;
        if (index === full.length) {
          isDeleting = true;
          timeoutId = setTimeout(() => {
            rafId = requestAnimationFrame(tick);
          }, pause);
          return;
        }
      } else {
        element.textContent = full.slice(0, index - 1);
        index -= 1;
        if (index === 0) {
          isDeleting = false;
        }
      }

      timeoutId = setTimeout(() => {
        rafId = requestAnimationFrame(tick);
      }, isDeleting ? speed / 2 : speed);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, pause]);

  return targetRef;
}

export default function Hero() {
  const typedRef = useTypingEffect(profile.headline, 60, 1200);
  return (
    <section id="home" className="relative min-h-screen w-full px-6">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80 dark:opacity-60">
        <Orb hue={-20} hoverIntensity={0.3} rotateOnHover={true} />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center w-full max-w-6xl mx-auto min-h-screen">
      <motion.img
        src={reactLogo}
        alt="Avatar"
        loading="lazy"
        className="w-40 h-40 rounded-full border-4 border-sky-200 dark:border-[#2a1b3d] bg-white dark:bg-[#1b122a] p-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="mt-6 text-[clamp(2rem,6vw,3.5rem)] font-extrabold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi 👋, I'm <span className="text-sky-600 dark:text-violet-300">{profile.name}</span>
      </motion.h1>
      <motion.p
        className="mt-3 md:mt-4 text-[clamp(0.95rem,2.2vw,1.25rem)] text-slate-600 dark:text-slate-300 min-h-[2.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        ref={typedRef}
      />
      </div>
    </section>
  );
}
