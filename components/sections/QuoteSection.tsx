"use client";

import { useState } from "react";

const rates: Record<string, Record<string, number>> = {
  "Residential Construction": {
    basic: 1800,
    standard: 2200,
    premium: 2800,
    luxury: 3500,
  },
  "Commercial Building": {
    basic: 2200,
    standard: 2800,
    premium: 3500,
    luxury: 4500,
  },
  "Villa Construction": {
    basic: 2800,
    standard: 3500,
    premium: 4500,
    luxury: 6000,
  },
  "Renovation": {
    basic: 800,
    standard: 1200,
    premium: 1800,
    luxury: 2500,
  },
};

const qualityLabels: Record<string, string> = {
  basic: "Basic",
  standard: "Standard",
  premium: "Premium",
  luxury: "Luxury",
};

const projectTypes = Object.keys(rates);
const qualityOptions = Object.keys(qualityLabels);

export default function QuoteSection() {
  const [sqft, setSqft] = useState("");
  const [quality, setQuality] = useState("standard");
  const [projectType, setProjectType] = useState("Residential Construction");

  const ratePerSqft = rates[projectType][quality];
  const total = Number(sqft) * ratePerSqft;

  const formatMoney = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const whatsappText = `Hello, I need a construction quote.

Project Type: ${projectType}
Built-up Area: ${sqft} sq.ft
Quality: ${qualityLabels[quality]} (₹${ratePerSqft.toLocaleString("en-IN")}/sq.ft)
Estimated Budget: ${formatMoney(total)}

Please contact me.`;

  return (
    <section id="quote" className="bg-[#070707] px-6 py-32 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        {/* Left Column */}
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

          {/* Rate Card */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-sm uppercase tracking-widest text-white/40">
              {projectType} — Rate Chart
            </p>
            <div className="grid grid-cols-2 gap-3">
              {qualityOptions.map((q) => (
                <div
                  key={q}
                  onClick={() => setQuality(q)}
                  className={`cursor-pointer rounded-xl border p-3 transition ${
                    quality === q
                      ? "border-yellow-400 bg-yellow-400/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <p className="text-xs text-white/50">{qualityLabels[q]}</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    ₹{rates[projectType][q].toLocaleString("en-IN")}
                    <span className="text-xs font-normal text-white/40">
                      /sq.ft
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          {/* Project Type */}
          <label className="mb-2 block text-white/70">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mb-5 w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-[#111] text-white">
                {type}
              </option>
            ))}
          </select>

          {/* Built-up Area */}
          <label className="mb-2 block text-white/70">Built-up Area (sq.ft)</label>
          <input
            type="number"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            placeholder="Example: 1200"
            className="mb-5 w-full rounded-2xl bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40"
          />

          {/* Construction Quality */}
          <label className="mb-2 block text-white/70">Construction Quality</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="mb-5 w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none"
          >
            {qualityOptions.map((q) => (
              <option key={q} value={q} className="bg-[#111] text-white">
                {qualityLabels[q]} — ₹{rates[projectType][q].toLocaleString("en-IN")}/sq.ft
              </option>
            ))}
          </select>

          {/* Estimated Budget */}
          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-white/60">Estimated Budget</p>
            <h3 className="mt-2 text-4xl font-black text-yellow-400">
              {total > 0 ? formatMoney(total) : "₹0"}
            </h3>
            {sqft && Number(sqft) > 0 && (
              <p className="mt-1 text-sm text-white/40">
                {sqft} sq.ft × ₹{ratePerSqft.toLocaleString("en-IN")}/sq.ft
              </p>
            )}
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/919952952351?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-yellow-400 py-4 text-center font-bold text-black transition hover:scale-[1.02]"
          >
            Send Quote Request
          </a>
        </div>
      </div>
    </section>
  );
}