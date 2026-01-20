import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{' '}
            <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve 
            your goals. Get a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a
              href={`https://wa.me/+923129562020?text=${encodeURIComponent("Hi VTech Limited, I'm interested in your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
