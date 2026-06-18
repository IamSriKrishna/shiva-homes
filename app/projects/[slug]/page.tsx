import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "luxury-villa": {
    title: "Luxury Villa",
    location: "Chennai, Tamil Nadu",
    image: "/home1.jpeg",
    category: "Residential Construction",
    year: "2026",
    description:
      "A premium villa project designed with modern architecture, spacious interiors, and high-quality construction standards.",
  },
  "commercial-tower": {
    title: "Commercial Tower",
    location: "Chennai, Tamil Nadu",
    image: "/home2.png",
    category: "Commercial Construction",
    year: "2026",
    description:
      "A modern commercial building created for business spaces, offices, and long-term investment value.",
  },
  "industrial-facility": {
    title: "Industrial Facility",
    location: "Tamil Nadu",
    image: "/home3.jpg",
    category: "Industrial Construction",
    year: "2026",
    description:
      "A strong and functional industrial facility built with planning, safety, and durable engineering.",
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/#projects" className="text-yellow-400">
            ← Back to Projects
          </Link>

          <div className="mt-10 overflow-hidden rounded-[32px]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
                {project.category}
              </p>

              <h1 className="text-5xl font-black md:text-7xl">
                {project.title}
              </h1>
            </div>

            <div className="space-y-6 text-white/70">
              <p className="text-lg leading-8">{project.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/40">Location</p>
                  <h3 className="mt-2 font-bold text-white">
                    {project.location}
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-white/40">Year</p>
                  <h3 className="mt-2 font-bold text-white">{project.year}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}