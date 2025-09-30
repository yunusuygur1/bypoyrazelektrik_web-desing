import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/905357908995?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-fade-in"
      aria-label="WhatsApp ile iletişim kur"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;