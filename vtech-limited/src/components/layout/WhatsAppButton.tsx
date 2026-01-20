import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '+923129562020';
  const message = encodeURIComponent("Hi VTech Limited, I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%,0.4)] hover:shadow-xl hover:shadow-[hsl(142,70%,45%,0.5)] transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)]" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse" />
    </motion.a>
  );
};
