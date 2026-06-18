export default function ClientsSection() {
  const logos = [
    "TATA",
    "L&T",
    "DLF",
    "Brigade",
    "Prestige",
    "Godrej",
  ];

  return (
    <section className="overflow-hidden border-y border-white/10 py-10">
      <div className="flex animate-marquee gap-20 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <span
            key={index}
            className="text-3xl font-black text-white/30"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}