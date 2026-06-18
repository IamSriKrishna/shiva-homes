"use client";

import { motion } from "framer-motion";
import { ClipboardList, DraftingCompass, HardHat, KeyRound } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    text: "We understand your land, budget, space needs, and project goals.",
  },
  {
    icon: DraftingCompass,
    title: "Planning & Design",
    text: "We prepare layout, materials, timeline, and construction scope.",
  },
  {
    icon: HardHat,
    title: "Construction",
    text: "Our team executes the project with quality checks and site updates.",
  },
  {
    icon: KeyRound,
    title: "Handover",
    text: "We complete finishing, inspection, and hand over the project.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Our Process
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          From first idea to final handover.
        </h2>

        <div className="relative mt-20 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 top-14 hidden h-px w-full bg-white/10 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <Icon size={26} />
                </div>

                <span className="text-sm font-black text-yellow-400">
                  STEP 0{index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}