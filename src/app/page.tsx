
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import StatsSection from '@/components/sections/stats-section';
import AiRecommendationSection from '@/components/sections/ai-recommendation-section';
import ContactSection from '@/components/sections/contact-section';
import CtaSection from '@/components/sections/cta-section';
import ServicesSection from '@/components/sections/services-section';
import FaqSection from '@/components/sections/faq-section';
import PlaceholderSection from '@/components/sections/placeholder-section'; // For sections not fully built yet

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <PlaceholderSection id="nuestro-proceso" title="Nuestro Proceso de Automatización" className="bg-background" />
      <ServicesSection />
      <PlaceholderSection id="proyectos" title="Proyectos Exitosos" className="bg-card" />
      <PlaceholderSection id="tecnologias" title="Tecnologías y Socios Clave" />
      <PlaceholderSection id="testimonios" title="Lo Que Dicen Nuestros Clientes" className="bg-card" />
      <FaqSection />
      <AiRecommendationSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
