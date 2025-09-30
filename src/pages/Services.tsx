import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Satellite, Camera, Phone, MessageCircle, CheckCircle, Clock, Shield, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Elektrik Hizmetleri",
      description: "Ev ve işyeri elektrik sistemleri için kapsamlı çözümler",
      image: "/images/services/panobakim.jpeg",
      services: [
        "Ev elektrik tesisatı kurulumu",
        "İşyeri elektrik sistemleri",
        "Elektrik panosu montajı ve bakımı",
        "Aydınlatma sistemleri",
        "Elektrik arızalarının tespiti ve onarımı",
        "Elektrik güvenlik kontrolü",
        "Topraklama sistemleri",
        "Elektrik sayacı bağlantıları"
      ]
    },
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Uydu Sistemleri",
      description: "Digital uydu alıcı sistemleri ve merkezi uydu çözümleri",
      image: "/images/services/uydu.jpg",
      services: [
        "Merkezi uydu sistemi kurulumu",
        "Tekli uydu anteni montajı",
        "Dijital uydu alıcı kurulumu",
        "Uydu sinyal güçlendirme",
        "Çanak anten tamiri",
        "Kablo TV altyapısı",
        "Uydu sistemleri bakım ve onarım",
        "HD ve 4K uydu sistemleri"
      ]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Güvenlik Kamera Sistemleri",
      description: "Modern güvenlik kameraları ve kayıt sistemleri",
      image: "/images/services/cctv.jpg",
      services: [
        "IP kamera sistemleri",
        "Analog kamera sistemleri", 
        "DVR ve NVR kayıt cihazları",
        "Gece görüş kameraları",
        "Hareket sensörlü kameralar",
        "Uzaktan erişim sistemleri",
        "Kamera bakım ve onarım",
        "Mobil uygulama entegrasyonu"
      ]
    }
  ];

  const workProcess = [
    {
      step: "1",
      title: "İletişim",
      description: "Telefon veya WhatsApp ile ihtiyacınızı belirtin"
    },
    {
      step: "2", 
      title: "Keşif",
      description: "Ücretsiz keşif ve detaylı fiyat teklifi"
    },
    {
      step: "3",
      title: "Planlama",
      description: "İş planının hazırlanması ve tarih belirleme"
    },
    {
      step: "4",
      title: "Uygulama",
      description: "Profesyonel montaj ve kurulum işlemi"
    },
    {
      step: "5",
      title: "Test",
      description: "Sistem testleri ve kalite kontrolü"
    },
    {
      step: "6",
      title: "Teslim",
      description: "Proje teslimi ve garanti belgesi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Hizmetlerimiz
            </h1>
            <p className="text-xl md:text-2xl mb-8 slide-in-left opacity-90">
              Elektrik, uydu ve kamera sistemleri için 
              <span className="font-semibold"> profesyonel çözümler</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
    <section className="py-20">
    <div className="container mx-auto px-4">
        <div className="space-y-20">
            {services.map((service, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Metin ve Liste Alanı */}
                    <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                        <div className="slide-in-left">
                            <div className="text-primary mb-4">
                                {service.icon}
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-gradient">
                                {service.title}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {service.description}
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.services.map((item, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex items-start space-x-3 fade-in"
                                        style={{ animationDelay: `${idx * 0.05}s` }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* RESİM ALANI: Tüm resimler kontrol altına alındı */}
                    <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                        <div className="slide-in-right">
                            <img
                                src={service.image}
                                alt={service.title}
                                // KOŞUL GÜNCELLENDİ:
                                className={`rounded-lg shadow-elegant w-full h-auto mx-auto ${
                                    service.image === '/images/services/panobakim.jpeg' 
                                        ? 'max-w-sm' // Panobakim resmi: ~384px (küçük)
                                        : 'max-w-lg' // Diğer resimler: ~512px (biraz küçük)
                                }`}
                            />
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
</section>

      {/* Work Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesyonel hizmet sürecimizin 6 adımı
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <Card 
                key={index} 
                className="card-hover text-center relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Hizmet Özelliklerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Hızlı Servis",
                description: "Acil durumlarda 7/24 hızlı müdahale"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Güvenli Çalışma",
                description: "Tüm güvenlik standartlarına uygun"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Kaliteli Malzeme",
                description: "Sadece kaliteli ve garantili malzemeler"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Garanti",
                description: "Tüm işlerimizde garanti belgesi"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="card-hover text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Projeniz İçin Hemen Teklif Alın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto slide-in-left">
          Keşif ve detaylı fiyat teklifi için bizimle iletişime geçin
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
                href="https://wa.me/905453393466?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;