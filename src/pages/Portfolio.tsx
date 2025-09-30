import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Satellite, Camera, Phone, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tüm İşler', icon: null },
    { id: 'elektrik', name: 'Elektrik', icon: <Zap className="w-4 h-4" /> },
    { id: 'uydu', name: 'Uydu', icon: <Satellite className="w-4 h-4" /> },
    { id: 'kamera', name: 'Kamera', icon: <Camera className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Daire Elektrik Tesisatı",
      category: "elektrik",
      location: "İstanbul, Cihangir",
      image: "images/villa.jpg",
      description: "120m² daire için şık ve gösterişli elektrik tesisatı kurulumu ve akıllı aydınlatma sistemi"
    },
    {
      id: 2,
      title: "Daire Elektrik Tesisatı",
      category: "elektrik",
      location: "İstanbul, Ihlamırkuyu",
      image: "images/spot.jpg",
      description: "Ihlamırkuyuda'ki 3+1 daire için komple elektrik tesisatı ve enerji verimliliği çözümleri"
    },
    {
      id: 3,
      title: "Daire Elektrik Tesisat İşlemleri",
      category: "elektrik",
      location: "İstanbul, Ihlamırkuyu",
      image: "images/montalama.jpg",
      description: "Ihlamırkuyuda'ki dairemizin için elektrik tesisat işlerinin tamamlanmasını gerçekleştirdik"
    },
    {
      id: 4,
      title: "İnşaat Elektrik Tesisat İşlemleri",
      category: "elektrik",
      location: "İstanbul, Ihlamırkuyu",
      image: "images/iceri.jpg",
      description: "Ihlamırkuyuda'ki dairemizin elektrik işlemlerinden sorumlu olduk"
    },
    {
      id: 5,
      title: "Ev Uydu Sistemi",
      category: "uydu",
      location: "İstanbul, Ümraniye",
      image: "images/uydu.jpg",
      description: "Ümraniye bölgesinde ikamet eden müşterimiz için tekli uydu anteni montajı ve sistem kurulumu"
    },
    {
      id: 6,
      title: "Ümraniye Belediyesi  Aydınlatma Çalışması",
      category: "elektrik",
      location: "İstanbul, Ümraniye",
      image: "images/umraniye.jpg",
      description: "Ümraniye Belediyesi için iç mekan aydınlatma çalışmamız."
    },
    {
      id: 7,
      title: "Ümraniye Belediyesi Priz Montajı",
      category: "elektrik",
      location: "İstanbul, Ümraniye",
      image: "images/umraniye2.jpg",
      description: "Ümraniye Belediyesi için priz montajı ve elektrik tesisatı çalışmamız."
    },
    {
      id: 8,
      title: "Daire Elektrik Aydınlatma Çalışması",
      category: "elektrik",
      location: "İstanbul, Ümraniye",
      image: "images/new.jpeg",
      description: "Ümraniye bölgesinde'ki bir dairemiz için şık ve modern elektrik aydınlatma çalışmamız."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Referanslarımız
            </h1>
            <p className="text-xl md:text-2xl mb-8 slide-in-left opacity-90">
              Tamamladığımız projelerden 
              <span className="font-semibold"> örnekler</span>
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-background z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                className={`${
                  filter === category.id 
                    ? "btn-primary" 
                    : "btn-secondary"
                } transition-all duration-300`}
                onClick={() => setFilter(category.id)}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="card-hover overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center space-x-2 text-sm mb-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                    <div className="text-primary">
                      {project.category === 'elektrik' && <Zap className="w-4 h-4" />}
                      {project.category === 'uydu' && <Satellite className="w-4 h-4" />}
                      {project.category === 'kamera' && <Camera className="w-4 h-4" />}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                  <p className="text-sm text-foreground line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Bu kategoride henüz proje bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "500+", label: "Tamamlanan Proje" },
              { number: "20", label: "Yıllık Deneyim" },
              { number: "100%", label: "Müşteri Memnuniyeti" },
              { number: "3", label: "Hizmet Alanı" }
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
            Siz de Projeler Arasında Olmak İster misiniz?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-in-left">
            Elektrik, uydu ve kamera sistemleri için profesyonel çözümler. 
            Hemen iletişime geçin ve projenizi hayata geçirelim.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
            <Button 
              size="lg" 
              variant="outline"
              className="btn-secondary text-lg px-8 py-3"
              asChild
            >
              <a href="tel:+905453393466">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </a>
            </Button>
            <Button 
              size="lg" 
              className="btn-whatsapp text-lg px-8 py-3"
              asChild
            >
              <a 
                href="https://wa.me/905453393466?text=Merhaba, projemi referanslarınız arasında görmek istiyorum."
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

export default Portfolio;