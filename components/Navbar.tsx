"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Real Estate", href: "/#real-estate" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        className="fixed left-0 top-0 z-50 w-full border-b border-white/10"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black tracking-wider text-white">
            SHIVAA HOMES
          </h1>

          <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                className="transition hover:text-yellow-400"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="/#quote"
            className="hidden rounded-full bg-yellow-400 px-5 py-3 font-bold text-black transition hover:scale-105 md:block"
          >
            Get Quote
          </a>

          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu className="text-white" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[999] bg-black p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">SHIVA</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="mt-20 flex flex-col gap-8 text-4xl font-black">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-yellow-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
