import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FloatingContact = () => {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        className="rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open('tel:YOUR_PHONE_NUMBER')}
      >
        <Phone className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default FloatingContact;