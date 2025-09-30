import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Satellite, Camera, Phone, MessageCircle, Star, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Elektrik Hizmetleri",
      description: "Ev ve işyeri elektrik tesisatı, arıza tespiti ve onarımı, elektrik panosu montajı",
      features: ["Tesissat Kurulumu", "Arıza Onarımı", "Pano Montajı", "Bakım Hizmetleri"]
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Uydu Sistemleri",
      description: "Merkezi uydu sistemi kurulumu, tekli uydu montajı, sinyal güçlendirme",
      features: ["Merkezi Sistem", "Tekli Montaj", "Sinyal Güçlendirme", "Bakım-Onarım"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Kamera Sistemleri",
      description: "Güvenlik kamerası kurulumu, IP kamera sistemleri, kayıt cihazı montajı",
      features: ["Güvenlik Kameraları", "IP Kamera Sistemleri", "Kayıt Cihazları", "Uzaktan Erişim"]
    }
  ];

  const stats = [
    { number: "500+", label: "Tamamlanan Proje" },
    { number: "20", label: "Yıllık Deneyim" },
    { number: "100%", label: "Müşteri Memnuniyeti" },
    { number: "7/24", label: "Destek Hizmeti" }
  ];

 const testimonials = [
  {
    name: "Eşref Kaya",
    location: "İstanbul",
    rating: 5,
    comment: "Çok profesyonel hizmet aldık. Elektrik tesisatımızı yeniledi, çok memnun kaldık.",
    date: "2 hafta önce"
  },
  {
    name: "Fatma Öz",
    location: "İstanbul",
    rating: 5,
    comment: "Uydu sistemimiz için aradık, hızlı geldi ve sorunumuzu çözdü. Teşekkürler Poyraz bey.",
    date: "1 ay önce"
  },
  {
    name: "Mehmet Demir",
    location: "İstanbul",
    rating: 5,
    comment: "Kamera sistemini kurdu, çok kaliteli iş çıkardı. Herkese tavsiye ederim.",
    date: "3 hafta önce"
  },
  {
    name: "Ayşe Yılmaz", 
    location: "İstanbul", 
    rating: 5, 
    comment: "Acil elektrik arızamız için gece geldiler. Hızları ve çözüm odaklı yaklaşımları harikaydı!", 
    date: "1 gün önce" 
  }, // Yeni eklediğin yorum buraya geldi.
  {
    name: "Halil Can", // Örnek yeni yorum
    location: "İstanbul", 
    rating: 5, 
    comment: "Merkezi uydu sistemi kurulumunda çok titiz çalıştılar. Görüntü kalitesi mükemmel.", 
    date: "1 hafta önce" 
  }, 
  {
    name: "Zeynep Akın", // İkinci örnek yeni yorum
    location: "İstanbul", 
    rating: 5, 
    comment: "Eskiyen elektrik panomuzu hızla ve güvenle değiştirdiler. Güvenilir hizmet.", 
    date: "2 ay önce" 
  }
]; // Dizinin sonu.

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-in-left">
              Elektrik, uydu ve kamera sistemleri konusunda profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover bg-card/80 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 btn-primary"
                    asChild
                  >
                    <Link to="/hizmetlerim">
                      Detayları Gör
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Neden Bizi Seçmelisiniz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Güvenilir Hizmet",
                description: "Tüm işlerimizde güvenlik ve kalite önceliğimiz"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Hızlı Müdahale",
                description: "Acil durumlarda 7/24 hızlı müdahale hizmeti"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Deneyimli Ekip",
                description: "5 yıllık deneyim ile profesyonel çözümler"
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Müşteri Memnuniyeti",
                description: "%100 müşteri memnuniyeti odaklı hizmet"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-muted-foreground">
              Müşterilerimizin bizim hakkımızdaki düşünceleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Projeniz İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto slide-in-left">
            Elektrik, uydu ve kamera sistemleri için profesyonel çözümler. 
            Ücretsiz keşif ve fiyat teklifi alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
<Button 
  size="lg" 
  className="btn-primary text-lg px-8 py-3" // <-- Özel Tailwind sınıfını kullan
  asChild
>
  <a href="tel:+905453393466">
    <Phone className="w-5 h-5 mr-2" />
    Hemen Ara
  </a>
</Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3"
              asChild
            >
              <a 
                href="https://wa.me/905453393466?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Mesaj
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;