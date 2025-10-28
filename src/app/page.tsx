import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ProblemSection from '@/components/sections/problem-section';
import BenefitsSection from '@/components/sections/benefits-section';
import TruthSection from '@/components/sections/truth-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import MethodSection from '@/components/sections/method-section';
import GuaranteeSection from '@/components/sections/guarantee-section';
import OfferSection from '@/components/sections/offer-section';
import FinalCallSection from '@/components/sections/final-call-section';
import Footer from '@/components/layout/footer';
import FloatingCta from '@/components/ui/floating-cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <TruthSection />
        <TestimonialsSection />
        <MethodSection />
        <GuaranteeSection />
        <OfferSection />
        <FinalCallSection />
      </main>
      <FloatingCta />
      <Footer />
    </div>
  );
}
