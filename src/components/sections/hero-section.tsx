
'use client';
// import Image from 'next/image'; // No longer needed for background
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';
import Link from 'next/link';
import TypingEffect from '@/components/client/typing-effect';

export default function HeroSection() {
  return (
    <SectionWrapper id="inicio" className="!py-0 min-h-screen flex items-center justify-center relative overflow-hidden" applyAnimation={false}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS
        className="absolute inset-0 w-full h-full object-cover -z-10" // Placed behind the overlay
        // Poster can be used to show an image while the video loads
        // poster="https://placehold.co/1920x1080.png" 
      >
        {/* 
          Replace this with the path to your video. 
          For local videos, place them in the `public` folder. e.g., /videos/hero-background.mp4
          For external videos, use the full URL.
        */}
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        {/* You can add more <source> elements for different video formats if needed */}
        Tu navegador no soporta el tag de video.
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 text-center p-4 animate-slide-up-fade-in max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-center min-h-[9rem] sm:min-h-[11rem] md:min-h-[14rem] lg:min-h-[16rem] flex flex-col justify-center items-center">
          <span className="text-primary block">Impulsando la</span>
          <TypingEffect
            texts={['Eficiencia', 'Productividad', 'Innovación']}
            className="text-foreground block my-1 sm:my-2 md:my-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            typingSpeed={120}
            deletingSpeed={70}
            pauseDuration={2000}
            cursorClassName="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          />
          <span className="text-primary block">con Automatización</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Transformamos tu negocio con soluciones de automatización inteligente, a medida y de vanguardia.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-10 py-6 text-lg font-semibold rounded-lg"
        >
          <Link href="/contacto">Contáctanos Hoy</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
