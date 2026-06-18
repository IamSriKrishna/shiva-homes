export default function CtaSection() {
  return (
    <section className="bg-black px-6 py-28 md:px-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-yellow-400/30 bg-yellow-400 px-8 py-16 text-black md:px-16">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em]">
          Start Your Project
        </p>

        <h2 className="max-w-4xl text-4xl font-black md:text-6xl">
          Ready to build your dream home or commercial space?
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/#quote"
            className="rounded-full bg-black px-8 py-4 font-bold text-white"
          >
            Get Quote
          </a>

          <a
            href="/#contact"
            className="rounded-full border border-black/20 px-8 py-4 font-bold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}