"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Calculator } from "lucide-react";
import { useState } from "react";

export default function StickyQuoteBar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(latest > 900);
  });

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 z-[998] hidden -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-black/80 px-5 py-3 text-white shadow-2xl backdrop-blur-xl md:flex"
    >
      <Calculator className="text-yellow-400" size={20} />

      <span className="text-sm text-white/70">
        Planning a construction project?
      </span>

      <a
        href="/#quote"
        className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black"
      >
        Get Quote
      </a>
    </motion.div>
  );
}