import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
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
import ProcessSection from "@/components/sections/ProcessSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import StickyQuoteBar from "@/components/StickyQuoteBar";

export default function Home() {
  return (
    <main className="bg-black text-white" >
      <Preloader />
      <ScrollProgress />
      <WhatsAppButton />
      <ScrollToTop />
      <Navbar />
      <StickyQuoteBar />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <AchievementsSection/>
      <CoverageSection />
      <ServicesSection />
      <ProcessSection />
      <BeforeAfterSection />
      <PropertiesSection />
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
