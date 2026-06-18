"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 700);
  });

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/80 text-yellow-400 shadow-2xl backdrop-blur-xl transition hover:scale-105"
    >
      <ArrowUp />
    </motion.button>
  );
}