"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";


const images = [
  "/shivahomes.png",
  "/Ramapuram.png",
  "/Suresh Nagar.png",
  "/levibe.png",
  "/aarupadai.png",
  "/after copy.png",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Gallery
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          A closer look at our construction work.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group overflow-hidden rounded-[28px] border border-white/10 text-left ${
                index === 0 || index === 5
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <img
                src={image}
                alt="Construction gallery"
                className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white"
            >
              <X />
            </button>

            <motion.img
              src={selectedImage}
              alt="Gallery preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="max-h-[85vh] max-w-6xl rounded-[32px] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}