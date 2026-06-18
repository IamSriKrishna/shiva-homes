"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do you calculate construction cost?",
    answer:
      "The rough cost is usually based on built-up area, construction quality, material choice, design complexity, location, and site condition.",
  },
  {
    question: "Do you handle both construction and real estate?",
    answer:
      "Yes. We support residential construction, commercial buildings, villa projects, renovation, and real estate development across Chennai and Tamil Nadu.",
  },
  {
    question: "Can I get a quote before final design?",
    answer:
      "Yes. We can provide a rough estimate first. A final quotation is given after understanding drawings, material requirements, site condition, and project scope.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We mainly serve Chennai and also handle projects across Tamil Nadu including Coimbatore, Madurai, Trichy, Salem, Erode, and nearby regions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#070707] px-6 py-32 md:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          FAQ
        </p>

        <h2 className="text-4xl font-black text-white md:text-6xl">
          Questions people ask before starting construction.
        </h2>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-xl font-bold text-white">
                    {faq.question}
                  </span>

                  <Plus
                    className={`shrink-0 text-yellow-400 transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-5 leading-8 text-white/60"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}