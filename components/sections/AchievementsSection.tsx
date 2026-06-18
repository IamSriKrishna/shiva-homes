"use client";

import Counter from "../Counter";

export default function AchievementsSection() {
  return (
    <section className="bg-[#070707] px-6 py-24 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {[
          {
            value: 500,
            suffix: "+",
            title: "Projects Completed",
          },
          {
            value: 15,
            suffix: "+",
            title: "Years Experience",
          },
          {
            value: 100,
            suffix: "+",
            title: "Team Members",
          },
          {
            value: 100,
            suffix: "%",
            title: "Client Satisfaction",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center"
          >
            <h2 className="text-5xl font-black text-yellow-400">
              <Counter end={item.value} />
              {item.suffix}
            </h2>

            <p className="mt-3 text-white/60">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}