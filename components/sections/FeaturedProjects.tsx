"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Ramapuram",
    slug: "Ramapuram",
    image: "/Ramapuram.png",
  },
  {
    title: "Shivaa Homes",
    slug: "shivahomes",
    image: "/shivahomes.png",
  },
  {
    title: "Suresh Nagar",
    slug: "Suresh-Nagar",
    image: "/Suresh Nagar.png",
  },
  {
    title: "Le vibe",
    slug: "levibe",
    image: "/levibe.png",
  },
  {
    title: "Aarupadai",
    slug: "aarupadai",
    image: "/aarupadai.png",
  },
];
export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Featured Projects
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-7xl">
          Engineering Excellence
        </h2>

        <div className="mt-16 grid gap-6 lg:hidden">
          {projects.map((project, index) => (
            <Link key={project.title} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[32px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <h3 className="absolute bottom-8 left-8 text-3xl font-black text-white">
                  {project.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="relative mt-28 hidden h-[720px] lg:block">
          {projects.map((project, index) => (
            <Link key={project.title} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -20, scale: 1.03 }}
                className="absolute overflow-hidden rounded-[32px] shadow-2xl"
                style={{
                  left: `${index * 180}px`,
                  top: `${index * 80}px`,
                  zIndex: 10 + index,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[400px] w-[700px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <h3 className="absolute bottom-8 left-8 text-3xl font-black text-white">
                  {project.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
