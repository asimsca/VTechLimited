import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Award, 
  TrendingUp, 
  Code2, 
  MessageSquareText, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    icon: Heart,
    title: 'Client Satisfaction First',
    description: 'Your success is our success. We prioritize understanding and meeting your needs above all else.',
  },
  {
    icon: Award,
    title: 'Proven Industry Experience',
    description: 'Over a decade of experience delivering successful projects across diverse industries.',
  },
  {
    icon: TrendingUp,
    title: 'Market-Driven Solutions',
    description: 'Solutions designed with market insights to give you a competitive advantage.',
  },
  {
    icon: Code2,
    title: 'Clean & Scalable Code',
    description: 'Following best practices to ensure maintainable, efficient, and future-proof applications.',
  },
  {
    icon: MessageSquareText,
    title: 'Transparent Communication',
    description: 'Regular updates, clear timelines, and open dialogue throughout the project lifecycle.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver quality work within agreed timeframes.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium mb-4 block"
            >
              Why VTech Limited
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Building Trust Through{' '}
              <span className="gradient-text">Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              We don't just build software — we build long-term partnerships. 
              Our commitment to quality, transparency, and client success sets us apart 
              in the industry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/about">
                <Button variant="hero" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
