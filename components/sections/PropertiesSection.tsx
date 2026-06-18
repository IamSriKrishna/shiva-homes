"use client";

import { motion } from "framer-motion";
import { Building, Home, LandPlot, Store } from "lucide-react";

const properties = [
  {
    icon: Home,
    title: "Luxury Villas",
    description:
      "Premium villa projects with modern architecture and spacious planning.",
  },
  {
    icon: LandPlot,
    title: "Residential Plots",
    description: "Well-connected land parcels across Chennai and Tamil Nadu.",
  },
  {
    icon: Building,
    title: "Apartment Projects",
    description: "Quality apartment developments for families and investors.",
  },
  {
    icon: Store,
    title: "Commercial Spaces",
    description: "Shops, offices, and business spaces in growing locations.",
  },
];

export default function PropertiesSection() {
  return (
    <section id="real-estate" className="bg-[#070707] px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Real Estate
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          Featured Property Solutions
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, index) => {
            const Icon = property.icon;

            return (
              <motion.div
                key={property.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-yellow-400/40"
              >
                <Icon className="mb-6 text-yellow-400" size={42} />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {property.title}
                </h3>

                <p className="leading-7 text-white/60">
                  {property.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
