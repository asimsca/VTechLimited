import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Palette, 
  Database, 
  Cloud,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored solutions designed to meet your unique business requirements and workflows.',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, responsive web apps built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that delivers intuitive and engaging digital experiences.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Efficient database design, optimization, and management for scalable applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure, CI/CD pipelines, and scalable deployment solutions.',
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Software Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From concept to deployment, we provide end-to-end software development 
            services that transform your ideas into powerful digital solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services">
            <Button variant="heroOutline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
