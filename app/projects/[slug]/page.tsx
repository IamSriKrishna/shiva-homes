import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "Ramapuram": {
    title: "Ramapuram",
    location: "Chennai, Tamil Nadu",
    image: "/Ramapuram.png",
    width: 1920,
    height: 1080,
    category: "Residential Construction",
    year: "2026",
    description:
      "Anadhasayanam – II is a premium G+3 residential apartment project by Shivaa Homes, showcasing contemporary architecture with elegant façade detailing, warm exterior lighting, and a sophisticated combination of textured stone and modern finishes. Designed to maximize natural light and ventilation, the building features spacious balconies, high-quality construction, and thoughtfully planned living spaces. Located in a well-connected neighborhood of Chennai, the project blends style, comfort, and durability, making it an ideal choice for modern urban families seeking quality craftsmanship and long-term value",
  },
  "shivahomes": {
    title: "Shivaa Homes",
    location: "Chennai, Tamil Nadu",
    image: "/shivahomes.png",
    width: 1920,
    height: 1080,
    category: "Contemporary Commercial Architecture",
    year: "2026",
    description:
      "A landmark commercial development designed to elevate modern business spaces through sophisticated architecture and premium construction. The project features specialty healthcare facilities, a contemporary café, and versatile commercial spaces, all complemented by elegant façade lighting, premium finishes, and exceptional craftsmanship. Every aspect has been carefully planned to create a professional, welcoming, and enduring destination for businesses and visitors alike.",
  },
  "Suresh-Nagar": {
    title: "Suresh Nagar",
    location: "Chennai, Tamil Nadu",
    image: "/Suresh Nagar.png",
    width: 1920,
    height: 1080,
    category: "Modern Contemporary Architecture",
    year: "2026",
    description:
      "Constructed by Shivaa Homes, Anandhasayanam – III is a landmark residential development that blends contemporary design with superior construction quality. The building's bold architectural elements, premium exterior cladding, ambient lighting, and spacious layouts create a refined living experience. Every aspect of the project has been thoughtfully planned to maximize natural light, ventilation, and long-term durability, making it a perfect example of Shivaa Homes' dedication to quality, innovation, and customer satisfaction",
  },
  levibe: {
    title: "Le vibe",
    location: "Chennai, Tamil Nadu",
    image: "/levibe.png",
    width: 1920,
    height: 1080,
    category: "Luxury Residential Residence",
    year: "2026",
    description:
      "Constructed by Shivaa Homes, LE VIBE is a masterpiece of contemporary architecture that seamlessly combines luxury, functionality, and exceptional craftsmanship. The striking façade, premium exterior finishes, warm architectural lighting, spacious balconies, and thoughtfully designed living spaces create an elegant and welcoming atmosphere. Built with uncompromising attention to quality and detail, the residence reflects Shivaa Homes' commitment to creating homes that are visually stunning, structurally sound, and designed for generations.",
  },

  aarupadai: {
    title: "Aarupadai",
    location: "Chennai, Tamil Nadu",
    image: "/aarupadai.png",
    width: 1920,
    height: 1080,
    category: "Premium Residential Apartment",
    year: "2026",
    description:
      "Aarupadai Veedu – I is a landmark residential development constructed by Shivaa Homes in collaboration with Raama Foundations, combining timeless architectural elegance with modern functionality. Featuring premium façade treatments, ambient architectural lighting, spacious residences, and high-quality materials, the project is designed to offer a sophisticated living experience. Every detail reflects an unwavering commitment to structural excellence, aesthetic appeal, and superior craftsmanship, creating a home that is both visually impressive and built to last for generations.",
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
          <Link
            href="/#projects"
            className="inline-flex text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 flex justify-center overflow-hidden rounded-[36px] border border-white/10 bg-[#0d0d0d] p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={project.width}
              height={project.height}
              priority
              className="h-auto max-h-[800px] w-full rounded-[28px] object-contain"
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-white/40">Location</p>
                  <h3 className="mt-2 font-bold text-white">
                    {project.location}
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm text-white/40">Year</p>
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
