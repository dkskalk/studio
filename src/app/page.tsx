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
import Header from '@/components/layout/header';
import ForWhomSection from '@/components/sections/for-whom-section';
import FaqSection from '@/components/sections/faq-section';
import FloatingCta from '@/components/ui/floating-cta';
import CreatorSection from '@/components/sections/creator-section';


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <TruthSection />
        <ForWhomSection />
        <TestimonialsSection />
        <CreatorSection />
        <MethodSection />
        <OfferSection />
        <GuaranteeSection />
        <FinalCallSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
