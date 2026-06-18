"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Villa",

    slug: "luxury-villa",
    image: "/home1.jpeg",
  },
  {
    title: "Corporate Tower",
    slug: "commercial-tower",
    image: "/home2.png",
  },
  {
    title: "Industrial Plant",
    slug: "industrial-facility",
    image: "/home3.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Projects
        </p>

        <h2 className="mb-16 text-4xl font-black text-white md:text-6xl">
          Our Recent Works
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`}>
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden rounded-[32px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-black text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
