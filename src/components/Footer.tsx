import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bypoyrazLogo from '@/assets/bypoyraz-logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Elektrik Tesisatı",
    "Elektrik Arıza Onarımı", 
    "Merkezi Uydu Sistemi",
    "Tekli Uydu Montajı",
    "Güvenlik Kamerası",
    "IP Kamera Sistemi"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+90 545 339 3466",
      href: "tel:+905453393466"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "bypoyrazelektrik@gmail.com", 
      href: "mailto:bypoyrazelektrik@gmail.com"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Giresun Tirebolu ve çevresi",
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/bypoyrazelektriik/",
      label: "Facebook"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/bypoyrazelektrik", 
      label: "Instagram"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/u%C4%9Fur-karag%C3%B6z-989b77230/?originalSubdomain=tr",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-xl font-bold text-gradient">By Poyraz Elektrik</h3>
            </div>
            <p className="text-muted-foreground">
              Elektrik, uydu ve kamera sistemleri konusunda profesyonel hizmet. 
              Giresun Tirebolu ve çevre illerde güvenilir çözümler sunuyoruz.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="p-2"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
           <h4 className="text-lg font-semibold">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li><a className="text-muted-foreground hover:text-primary transition-colors duration-200">Ana Sayfa</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors duration-200">Hakkımızda</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors duration-200">Hizmetlerimiz</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors duration-200">Referanslarımız</a></li>
              <li><a className="text-muted-foreground hover:text-primary transition-colors duration-200">İletişim</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">İletişim</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
            
            {/* WhatsApp Button */}
            <Button
              className="w-full btn-whatsapp mt-4"
              asChild
            >
              <a
                href="https://wa.me/905453393466?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-mute d-foreground">
              © {currentYear} By Poyraz Elektrik. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <a  className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Gizlilik Politikası
              </a>
              <a className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;