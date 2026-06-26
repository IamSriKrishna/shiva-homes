"use client";

import { motion } from "framer-motion";
import RevealText from "../RevealText";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#070707] px-6 py-28 text-white md:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <RevealText>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
              About Us
            </p>
          </RevealText>
          <RevealText>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            We build spaces that stand strong for generations.
          </h2>
          </RevealText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-end"
        >
          <p className="text-lg leading-8 text-white/65">
            Our construction company delivers high-quality residential,
            commercial, and industrial projects with precision planning, premium
            materials, and trusted engineering.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-black text-yellow-400">150+</h3>
              <p className="mt-2 text-white/60">Skilled Workers</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-black text-yellow-400">40+</h3>
              <p className="mt-2 text-white/60">Cities Covered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
