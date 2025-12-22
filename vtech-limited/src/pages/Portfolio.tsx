import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/CTASection';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinanceFlow Dashboard',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    problem: 'Complex financial data management with outdated legacy systems causing delays and errors.',
    solution: 'Built a modern, real-time financial dashboard with automated reporting and AI-powered insights.',
    results: ['60% faster reporting', '95% error reduction', '$500K annual savings'],
  },
  {
    title: 'HealthCare Connect',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    problem: 'Fragmented patient data across multiple systems leading to poor care coordination.',
    solution: 'Developed an integrated platform connecting all healthcare providers with secure data sharing.',
    results: ['40% improved patient outcomes', 'HIPAA compliant', '3x faster diagnoses'],
  },
  {
    title: 'RetailPro E-Commerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    problem: 'Poor mobile experience and slow checkout process causing high cart abandonment.',
    solution: 'Redesigned the entire shopping experience with a mobile-first approach and streamlined checkout.',
    results: ['150% increase in mobile sales', '35% lower abandonment', '4.8 star rating'],
  },
  {
    title: 'LogiTrack Fleet Management',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    problem: 'Inefficient route planning and lack of real-time visibility into fleet operations.',
    solution: 'Created an IoT-enabled fleet management system with AI-powered route optimization.',
    results: ['25% fuel savings', 'Real-time tracking', '20% more deliveries'],
  },
  {
    title: 'EduLearn Platform',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    problem: 'Traditional learning methods failing to engage modern students effectively.',
    solution: 'Built an interactive learning platform with gamification, video courses, and progress tracking.',
    results: ['200K+ active users', '85% completion rate', 'Award-winning UX'],
  },
  {
    title: 'PropertyHub Real Estate',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    problem: 'Disconnected buying/selling experience with manual paperwork and slow processes.',
    solution: 'Developed an end-to-end digital platform for property transactions with virtual tours.',
    results: ['50% faster closings', '10K+ listings', '$2B in transactions'],
  },
];

const Portfolio = () => {
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
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Case Studies &{' '}
              <span className="gradient-text">Success Stories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Explore how we've helped businesses across industries transform 
              their operations and achieve remarkable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-primary font-medium text-sm">The Challenge</span>
                      <p className="text-muted-foreground mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-primary font-medium text-sm">Our Solution</span>
                      <p className="text-muted-foreground mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  <Button variant="heroOutline" size="sm" className="group/btn">
                    View Case Study
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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

export default Portfolio;
