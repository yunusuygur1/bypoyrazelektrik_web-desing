import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp ile mesaj gönder
    const whatsappMessage = `Merhaba, web sitesinden iletişim formu doldurdum.
    
Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
Hizmet: ${formData.service}
Mesaj: ${formData.message}`;

    const whatsappUrl = `https://wa.me/905453393466?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Mesajınız iletildi!",
      description: "WhatsApp üzerinden size ulaşacağız.",
    });
    
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+90 545 339 3466",
      action: "tel:+905453393466",
      description: "Hemen arayın"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+90 545 339 3466",
      action: "https://wa.me/905453393466?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum.",
      description: "Mesaj gönderin"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      value: "bypoyrazelektrik@gmail.com",
      action: "mailto:bypoyrazelektrik@gmail.com",
      description: "E-posta gönderin"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hizmet Alanı",
      value: "Giresun/Tirebolu ve çevresi",
      action: "#",
      description: "Hizmet bölgesi"
    }
  ];

  const services = [
    "Elektrik Tesisatı",
    "Elektrik Arıza Onarımı",
    "Merkezi Uydu Sistemi",
    "Tekli Uydu Montajı",
    "Güvenlik Kamerası",
    "IP Kamera Sistemi",
    "Diğer"
  ];

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "08:00 - 18:00" },
    { day: "Cumartesi", hours: "09:00 - 17:00" },
    { day: "Pazar", hours: "Acil durum hizmeti" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              İletişim
            </h1>
            <p className="text-xl md:text-2xl mb-8 slide-in-left opacity-90">
              Projeleriniz için 
              <span className="font-semibold"> hemen iletişime geçin</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="card-hover text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (info.action.startsWith('http') || info.action.startsWith('tel:') || info.action.startsWith('mailto:')) {
                    window.open(info.action, '_blank');
                  }
                }}
              >
                <CardHeader>
                  <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-gradient">
                    Hızlı İletişim Formu
                  </CardTitle>
                  <CardDescription className="text-base">
                    Formu doldurun, WhatsApp üzerinden size ulaşalım
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Adınızı ve soyadınızı girin"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="0555 123 45 67"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Hizmet Türü *</Label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Hizmet seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mesajınız *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Projeniz hakkında detay verin..."
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary" size="lg">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp ile Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="slide-in-right space-y-8">
              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Çalışma Saatleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      📞 Acil durumlarda 7/24 hizmet veriyoruz
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-primary" />
                    Neden Bizimle İletişime Geçmelisiniz?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Keşif ve fiyat teklifi",
                      "Hızlı geri dönüş garantisi",
                      "Profesyonel danışmanlık hizmeti",
                      "Şeffaf fiyatlandırma",
                      "Garanti belgeli hizmet"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full btn-primary"
                  asChild
                >
                  <a href="tel:+905453393466">
                    <Phone className="w-5 h-5 mr-2" />
                    Hemen Ara: +90 545 339 3466
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  className="w-full btn-whatsapp"
                  asChild
                >
                  <a 
                    href="https://wa.me/905453393466?text=Merhaba, elektrik hizmetiniz hakkında bilgi almak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp ile Mesaj Gönder
                  </a>
                </Button>
              </div>

              {/* Social Media Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Sosyal Medya'da Bizi Takip Edin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="p-3"
                      asChild
                    >
                      <a 
                        href="https://www.facebook.com/bypoyrazelektriik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="p-3"
                      asChild
                    >
                      <a 
                        href="https://instagram.com/bypoyrazelektrik"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="p-3"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/u%C4%9Fur-karag%C3%B6z-989b77230/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

     {/* Map Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
 Yerimizi Haritada Görüntüleyin      </h2>
      <p className="text-xl text-muted-foreground">
        Giresun Tirebolu ve çevre illerde hizmet veriyoruz
      </p>
    </div>

  </div>
</section>
</div>
);
};

export default Contact;
