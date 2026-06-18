"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Counter";

export default function HeroSection() {
  const { scrollY } = useScroll();

  const videoY = useTransform(scrollY, [0, 600], [0, 180]);
  const textY = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.video
        style={{ y: videoY }}
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        src="/shiva.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-construction.jpg"
      />

      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex min-h-screen flex-col items-start justify-center px-6 py-32 md:px-20"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
          Modern Construction & Real Estate Company
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-8xl">
          Building Future <br />
          With Precision
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          We deliver premium residential, commercial, and real estate projects
          across Chennai and Tamil Nadu with strong engineering, quality
          materials, and reliable execution.
        </p>

        <div className="mt-10">
          <a
            href="/#projects"
            className="inline-block rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Explore Projects
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-10">
          <div>
            <h3 className="text-4xl font-black">
              <Counter end={15} />+
            </h3>
            <p className="text-white/60">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              <Counter end={500} />+
            </h3>
            <p className="text-white/60">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              <Counter end={100} />%
            </h3>
            <p className="text-white/60">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}