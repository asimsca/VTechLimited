import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Palette, 
  TestTube, 
  Database, 
  Cloud, 
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions tailored to your unique business processes, workflows, and goals.',
    benefits: [
      'Tailored to your exact requirements',
      'Scalable architecture for growth',
      'Seamless integration with existing systems',
      'Ongoing maintenance and support',
    ],
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    benefits: [
      'Responsive across all devices',
      'Fast loading and optimized performance',
      'SEO-friendly architecture',
      'Secure and reliable',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    benefits: [
      'iOS and Android platforms',
      'Native and cross-platform options',
      'Intuitive user interfaces',
      'App Store optimization',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and visually stunning digital experiences.',
    benefits: [
      'User research and testing',
      'Wireframing and prototyping',
      'Visual design systems',
      'Accessibility compliance',
    ],
  },
  {
    icon: TestTube,
    title: 'Quality Assurance & Testing',
    description: 'Comprehensive testing services to ensure your software meets the highest quality standards.',
    benefits: [
      'Automated testing suites',
      'Performance testing',
      'Security testing',
      'Cross-browser compatibility',
    ],
  },
  {
    icon: Database,
    title: 'Database Design & Optimization',
    description: 'Efficient database solutions that ensure fast data access, integrity, and scalability.',
    benefits: [
      'Optimized query performance',
      'Data migration services',
      'Backup and recovery',
      'Real-time data processing',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure, CI/CD pipelines, and scalable deployment solutions for modern applications.',
    benefits: [
      'Cloud migration strategies',
      'Automated deployments',
      'Infrastructure as code',
      '24/7 monitoring and alerts',
    ],
  },
  {
    icon: Sparkles,
    title: 'Modern & Trending Technologies',
    description: 'Leverage AI, SaaS, and microservices to stay ahead of the competition with innovative solutions.',
    benefits: [
      'AI and machine learning',
      'SaaS platform development',
      'Microservices architecture',
      'API development and integration',
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Comprehensive{' '}
              <span className="gradient-text">Software Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              From concept to deployment, we provide end-to-end software development 
              services that transform your ideas into powerful digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
