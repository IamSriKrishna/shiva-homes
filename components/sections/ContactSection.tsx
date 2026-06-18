"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "9952952351";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `Hello, I am ${name}.
Email: ${email}

Project Details:
${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="bg-[#050505] px-6 py-32 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Contact
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Let’s build your next project.
          </h2>

          <div className="mt-10 space-y-5 text-white/70">
            <p className="flex items-center gap-3">
              <Phone className="text-yellow-400" /> +91 99529 52351
            </p>

            <p className="flex items-center gap-3">
              <Mail className="text-yellow-400" /> hari@shiva.com
            </p>

            <p className="flex items-start gap-3">
              <MapPin className="mt-1 text-yellow-400" />
              Chowdry Nagar, 10th Cross St, Chowthri Nagar, Nesapakkam, Chennai,
              Tamil Nadu 600087
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-2xl bg-white/10 px-5 py-4 outline-none placeholder:text-white/40"
            placeholder="Your Name"
          />

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-2xl bg-white/10 px-5 py-4 outline-none placeholder:text-white/40"
            placeholder="Email Address"
          />

          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 h-36 w-full resize-none rounded-2xl bg-white/10 px-5 py-4 outline-none placeholder:text-white/40"
            placeholder="Tell us about your project"
          />

          <button className="w-full rounded-full bg-yellow-400 py-4 font-bold text-black transition hover:scale-[1.02]">
            Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
