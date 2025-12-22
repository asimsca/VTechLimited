import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
