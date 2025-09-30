import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '@/assets/bypoyraz-logo.png';

const Header = () => {
    // Mevcut state'ler
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    // YENİ AKILLI HEADER STATE'LERİ
    const [isScrolled, setIsScrolled] = useState(false); // Kaydırma eşiği (Arka plan/gölge için)
    const [isVisible, setIsVisible] = useState(true);     // Header görünür mü? (Gizleme/Gösterme için)
    const [prevScrollY, setPrevScrollY] = useState(0);    // Önceki kaydırma pozisyonu

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // 1. SCROLL GÖLGE MANTIĞI (100px'ten sonra çalışır)
            // Bu sadece arka plan/gölge eklemek için.
            setIsScrolled(currentScrollY > 100);

            // 2. AKILLI GİZLE/GÖSTER MANTIĞI
            const headerHeight = 80; // Header'ın yaklaşık yüksekliği (px)

            if (currentScrollY > headerHeight) { // Header'ın yüksekliğini geçtikten sonra mantığı devreye al
                if (prevScrollY > currentScrollY) {
                    // YUKARI KAYDIRDI (GÖSTER)
                    setIsVisible(true);
                } else if (prevScrollY < currentScrollY) {
                    // AŞAĞI KAYDIRDI (GİZLE)
                    setIsVisible(false);
                }
            } else {
                // Sayfanın en üstündeyken her zaman göster
                setIsVisible(true);
            }

            // 3. Bir sonraki döngü için Y pozisyonunu kaydet
            setPrevScrollY(currentScrollY);
        };

        // Scroll olay dinleyicisini ekle
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Temizleme fonksiyonu
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [prevScrollY]); // prevScrollY değiştiğinde useEffect'in tekrar çalışması için

    const navigation = [
      { name: 'Anasayfa', href: '/' },
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Hizmetlerimiz', href: '/hizmetlerim' },
      { name: 'Referanslar', href: '/referanslar' },
      { name: 'İletişim', href: '/iletisim' },
    ];

    return (
      <header
        className={`
            // Temel Sabitleme Stili
            fixed top-0 left-0 right-0 z-50 
            transition-all duration-300 ease-in-out
            
            // Gizleme/Gösterme (isVisible = false ise -full'a kaydır)
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            
            // Kaydırma Arka Planı ve Gölge
            ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo ve İsim */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logoImage} 
                alt="By Poyraz Elektrik Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
              </div>
            </Link>

            {/* Desktop Navigation... (Kalan kısım değişmedi) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                size="sm" 
                variant="outline"
                className="btn-secondary"
                asChild
              >
                <a href="tel:+905453393466">
                  <Phone className="w-4 h-4 mr-2" />
                  Ara
                </a>
              </Button>
              <Button 
                size="sm" 
                className="btn-whatsapp"
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg rounded-lg mt-2 border border-border shadow-soft">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-primary hover:bg-secondary/20 rounded-md ${
                      location.pathname === item.href
                        ? 'text-primary bg-secondary/30'
                        : 'text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-3 py-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="btn-secondary w-full"
                    asChild
                  >
                    <a href="tel:+905453393466">
                      <Phone className="w-4 h-4 mr-2" />
                      Hemen Ara
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="btn-whatsapp w-full"
                    asChild
                  >
                    <a 
                      href="https://wa.me/905453393466?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Mesaj
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
};

export default Header;