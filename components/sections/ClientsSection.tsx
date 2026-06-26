export default function ClientsSection() {
  const logos = [
    "UltraTech Cement",
    "Tata Steel",
    "JSW Steel",
    "Red Clay Bricks",
    "Fly Ash Bricks",
    "AAC Blocks",
    "JSW Cement",
    "Chettinad Cement",
  ];

  return (
    <section className="overflow-hidden border-y border-white/10 py-10">
      <div className="flex animate-marquee gap-20 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <span key={index} className="text-3xl font-black text-white/30">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
