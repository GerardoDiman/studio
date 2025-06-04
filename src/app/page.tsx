
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import StatsSection from '@/components/sections/stats-section';
import AiRecommendationSection from '@/components/sections/ai-recommendation-section';
import ContactSection from '@/components/sections/contact-section';
import CtaSection from '@/components/sections/cta-section';
import ServicesSection from '@/components/sections/services-section';
import FaqSection from '@/components/sections/faq-section';
import NuestroProcesoSection from '@/components/sections/nuestro-proceso-section';
import ProyectosSection from '@/components/sections/proyectos-section';
import TecnologiasSection from '@/components/sections/tecnologias-section';
import TestimoniosSection from '@/components/sections/testimonios-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <NuestroProcesoSection />
      <ServicesSection />
      <ProyectosSection />
      <TecnologiasSection />
      <TestimoniosSection />
      <FaqSection />
      <AiRecommendationSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
