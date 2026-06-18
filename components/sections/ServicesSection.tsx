"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Warehouse, HardHat } from "lucide-react";
import TiltCard from "../TiltCard";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Large-scale office buildings, malls and commercial spaces.",
  },
  {
    icon: HardHat,
    title: "Residential Projects",
    description: "Luxury villas, apartments and modern housing developments.",
  },
  {
    icon: Warehouse,
    title: "Industrial Infrastructure",
    description: "Factories, warehouses and production facilities.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transforming old structures into modern masterpieces.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#050505] px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Services
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          Complete Construction Solutions
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <TiltCard className="h-full">
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg transition-all hover:-translate-y-2 hover:border-yellow-400/30"
                >
                  <Icon size={42} className="mb-6 text-yellow-400" />

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-white/60">
                    {service.description}
                  </p>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
