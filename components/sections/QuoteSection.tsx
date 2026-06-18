"use client";

import { useState } from "react";

const rates = {
  basic: 1800,
  standard: 2200,
  premium: 2800,
  luxury: 3500,
};

export default function QuoteSection() {
  const [sqft, setSqft] = useState("");
  const [quality, setQuality] = useState<keyof typeof rates>("standard");
  const [projectType, setProjectType] = useState("Residential Construction");

  const total = Number(sqft) * rates[quality];

  const formatMoney = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const whatsappText = `Hello, I need a construction quote.

Project Type: ${projectType}
Built-up Area: ${sqft} sq.ft
Quality: ${quality}
Estimated Budget: ${formatMoney(total)}

Please contact me.`;

  return (
    <section id="quote" className="bg-[#070707] px-6 py-32 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Estimate
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Get a quick construction quote.
          </h2>

          <p className="mt-6 text-white/60">
            Enter your approximate built-up area and construction quality to get
            a rough budget estimate. Final quote depends on design, soil,
            materials, approvals, and site condition.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <label className="mb-2 block text-white/70">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mb-5 w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none"
          >
            <option className="bg-[#111] text-white">Residential Construction</option>
            <option className="bg-[#111] text-white">Commercial Building</option>
            <option className="bg-[#111] text-white">Villa Construction</option>
            <option className="bg-[#111] text-white">Renovation</option>
          </select>

          <label className="mb-2 block text-white/70">Built-up Area</label>
          <input
            type="number"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            placeholder="Example: 1200"
            className="mb-5 w-full rounded-2xl bg-white/10 px-5 py-4 outline-none placeholder:text-white/40"
          />

          <label className="mb-2 block text-white/70">
            Construction Quality
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mb-5 w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none"
          >
            <option className="bg-[#111] text-white">
              Residential Construction
            </option>
            <option className="bg-[#111] text-white">
              Commercial Building
            </option>
            <option className="bg-[#111] text-white">Villa Construction</option>
            <option className="bg-[#111] text-white">Renovation</option>
          </select>

          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-white/60">Estimated Budget</p>
            <h3 className="mt-2 text-4xl font-black text-yellow-400">
              {total > 0 ? formatMoney(total) : "₹0"}
            </h3>
          </div>

          <a
            href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
              whatsappText,
            )}`}
            target="_blank"
            className="mt-6 block rounded-full bg-yellow-400 py-4 text-center font-bold bg-[#111] text-black transition hover:scale-[1.02]"
          >
            Send Quote Request
          </a>
        </div>
      </div>
    </section>
  );
}
