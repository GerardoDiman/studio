
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import StatsSection from '@/components/sections/stats-section';
import CtaSection from '@/components/sections/cta-section';
import NuestroProcesoSection from '@/components/sections/nuestro-proceso-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <NuestroProcesoSection />
      <CtaSection />
    </>
  );
}
