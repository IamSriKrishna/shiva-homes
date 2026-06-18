import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ScrollProgress from "@/components/ScrollProgress";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertiesSection from "@/components/sections/PropertiesSection";
import LocationSection from "@/components/sections/LocationSection";
import QuoteSection from "@/components/sections/QuoteSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoverageSection from "@/components/sections/CoverageSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <CoverageSection />
      <ServicesSection />
      <PropertiesSection />
      <ProjectsSection />
      <FeaturedProjects />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <QuoteSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
