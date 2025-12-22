import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  PenTool, 
  Code, 
  TestTube, 
  Rocket 
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Understanding Client Needs',
    description: 'We start by deeply understanding your business goals, challenges, and vision for the project.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Market & Business Analysis',
    description: 'Thorough analysis of your market, competitors, and target audience to inform our strategy.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design & Architecture',
    description: 'Creating intuitive designs and robust system architecture tailored to your requirements.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Agile Development',
    description: 'Iterative development with regular updates and flexibility to adapt to changing needs.',
  },
  {
    number: '05',
    icon: TestTube,
    title: 'QA & Testing',
    description: 'Rigorous testing to ensure quality, security, and performance across all scenarios.',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Delivery & Support',
    description: 'Smooth deployment and ongoing support to ensure your solution continues to thrive.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4 block"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A proven, systematic approach that ensures successful project delivery 
            and exceeds client expectations every time.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border h-full hover:border-primary/50 transition-all duration-300">
                {/* Step Number */}
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
