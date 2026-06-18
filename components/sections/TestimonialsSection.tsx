"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Home Owner",
    location: "Chennai",
    text: "Excellent workmanship and clear communication throughout our house construction.",
  },
  {
    name: "Business Owner",
    location: "Tamil Nadu",
    text: "Professional team, quality materials, and timely execution for our commercial space.",
  },
  {
    name: "Property Investor",
    location: "Chennai",
    text: "Reliable real estate guidance and smooth project handling from start to finish.",
  },
  {
    name: "Villa Client",
    location: "ECR, Chennai",
    text: "They understood our villa requirements clearly and delivered a premium finish.",
  },
  {
    name: "Apartment Owner",
    location: "Nesapakkam",
    text: "Very responsive team and good quality construction work within the planned budget.",
  },
  {
    name: "Land Buyer",
    location: "Tamil Nadu",
    text: "They guided us properly while choosing the right property for investment.",
  },
  {
    name: "Commercial Client",
    location: "Chennai",
    text: "Our office building work was handled professionally from planning to completion.",
  },
  {
    name: "Renovation Client",
    location: "Madurai",
    text: "They transformed our old building into a modern and usable space.",
  },
  {
    name: "Family Home Client",
    location: "Coimbatore",
    text: "The team was trustworthy, transparent, and easy to communicate with.",
  },
  {
    name: "Real Estate Client",
    location: "Trichy",
    text: "Good support for both construction planning and real estate consultation.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Testimonials
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          Trusted by clients across Tamil Nadu.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-8 text-white/70">“{item.text}”</p>

              <div className="mt-8">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-sm text-white/40">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}