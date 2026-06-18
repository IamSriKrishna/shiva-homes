import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 md:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black">SHIVA</h2>
          <p className="mt-4 max-w-md leading-7 text-white/50">
            Construction and real estate company building residential,
            commercial, and property development projects across Chennai and
            Tamil Nadu.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <div className="space-y-3 text-white/50">
            <p><a href="/#home">Home</a></p>
            <p><a href="/#about">About</a></p>
            <p><a href="/#services">Services</a></p>
            <p><a href="/#projects">Projects</a></p>
            <p><a href="/#contact">Contact</a></p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <div className="space-y-4 text-white/50">
            <p className="flex gap-3">
              <Phone className="mt-1 text-yellow-400" size={18} />
              +91 99529 52351
            </p>

            <p className="flex gap-3">
              <Mail className="mt-1 text-yellow-400" size={18} />
              hari@shiva.com
            </p>

            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-yellow-400" size={18} />
              Chowdry Nagar, 10th Cross St, Chowthri Nagar, Nesapakkam,
              Chennai, Tamil Nadu 600087
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
        <p>© 2026 Shiva Construction & Real Estate. All rights reserved.</p>
        <p>Built with precision.</p>
      </div>
    </footer>
  );
}