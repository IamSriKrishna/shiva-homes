"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import RevealText from "../RevealText";

const points = [
  { city: "Chennai", x: "50%", y: "50%", main: true },
  { city: "Porur", x: "14%", y: "26%" },
  { city: "Adyar", x: "25%", y: "78%" },
  { city: "Thiruvanmiyur", x: "43%", y: "80%" },
  { city: "Purasawalkam", x: "34%", y: "24%" },
  { city: "Pallikaranai", x: "20%", y: "52%" },
  { city: "Ambattur", x: "66%", y: "22%" },
  { city: "Madhanandapuram", x: "75%", y: "58%" },
  { city: "Ramapuram", x: "60%", y: "82%" },
  { city: "Tambaram", x: "82%", y: "36%" },
];

export default function CoverageSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-20">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <RevealText>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Coverage Network
          </p>
        </RevealText>
        <RevealText>
          <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
            One trusted construction network across Tamil Nadu.
          </h2>
        </RevealText>
        <div className="relative mt-20 h-[650px] overflow-hidden rounded-[44px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),rgba(255,255,255,0.03),transparent_70%)] shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <motion.div
            animate={{ scale: [1, 1.7], opacity: [0.35, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400"
          />

          <motion.div
            animate={{ scale: [1, 2.4], opacity: [0.25, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400"
          />

          <svg className="absolute inset-0 h-full w-full">
            {points
              .filter((p) => !p.main)
              .map((p, index) => (
                <motion.line
                  key={p.city}
                  x1="50%"
                  y1="50%"
                  x2={p.x}
                  y2={p.y}
                  stroke="#facc15"
                  strokeWidth="1.4"
                  strokeDasharray="8 10"
                  opacity="0.35"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.08 }}
                />
              ))}
          </svg>

          {points.map((point, index) => (
            <motion.div
              key={point.city}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: point.x, top: point.y }}
            >
              <div
                className={`relative flex items-center gap-2 rounded-full border px-5 py-3 backdrop-blur-xl ${
                  point.main
                    ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_60px_rgba(250,204,21,0.55)]"
                    : "border-white/10 bg-black/70 text-white shadow-2xl"
                }`}
              >
                {point.main ? <Navigation size={18} /> : <MapPin size={18} />}
                <span className="text-sm font-bold">{point.city}</span>

                {!point.main && (
                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]" />
                )}
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Head Office
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">Chennai</h3>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Serving residential, commercial, and real estate projects across
              Tamil Nadu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
