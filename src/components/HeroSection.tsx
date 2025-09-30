import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "/images/new.jpeg",
    "/images/new2.jpg",
    "/images/new3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Profesyonel Hizmet",
      description: "Uzman ekibimizle güvenilir çözümler"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Güvenlik Öncelikli",
      description: "Tüm işlerimizde güvenlik standartları"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hızlı Müdahale",
      description: "7/24 acil durum hizmetimiz"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Kalite Garantisi",
      description: "İşlerimizde kalite ve garanti"
    }
  ];

  return (
   <section className="relative h-screen max-h-[700px] lg:max-h-[850px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Elektrik hizmetleri ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-poyraz mb-6 slide-in-left">
  <span className="text-gradient-white">BY POYRAZ</span>
  <br />
  <span className="text-primary">ELEKTRİK</span>
</h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto slide-in-right opacity-90">
            Elektrik, Uydu ve Kamera Sistemleri konusunda 
            <span className="text-primary font-semibold"> profesyonel hizmet</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-3"
              asChild
            >
              <a href="#hizmetler">
                Hizmetlerimizi Keşfet
              </a>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 card-hover border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm lg:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-sm opacity-90">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;