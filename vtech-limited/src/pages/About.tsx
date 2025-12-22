import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Heart, 
  Award, 
  Users, 
  Target, 
  Handshake, 
  Lightbulb 
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Client-Centric Culture',
    description: 'Your success is our priority. We listen, understand, and deliver solutions that truly matter to your business.',
  },
  {
    icon: Award,
    title: 'Quality-Driven Mindset',
    description: 'We never compromise on quality. Every line of code, every design decision is made with excellence in mind.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnerships',
    description: 'We build relationships, not just software. Our clients become partners we grow with over time.',
  },
  {
    icon: Target,
    title: 'Market-Oriented Solutions',
    description: 'We stay ahead of market trends to deliver solutions that give you a competitive advantage.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our experienced professionals bring diverse expertise and a passion for innovation to every project.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace new technologies and approaches to solve complex problems with creative solutions.',
  },
];

const team = [
  {
    name: 'David Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Jennifer Lee',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sarah Williams',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face',
  },
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Building the Future of{' '}
              <span className="gradient-text">Digital Innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              VTech Limited is a client-first, market-oriented software company with 
              a strong reputation for quality, reliability, and customer satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Decade of Excellence in Software Development
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between businesses and technology, 
                  VTech Limited has grown into a trusted partner for companies across industries.
                </p>
                <p>
                  We believe that great software comes from truly understanding our clients' 
                  needs and delivering solutions that exceed expectations. Our team of 
                  experienced professionals combines technical expertise with business acumen 
                  to create software that drives real results.
                </p>
                <p>
                  Over the years, we've successfully delivered 200+ projects, helping 
                  businesses of all sizes transform their operations and achieve their goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                    <span className="text-6xl font-bold text-primary-foreground">V</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium mb-4 block"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              What Drives Us Forward
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium mb-4 block"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Meet the Experts
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
