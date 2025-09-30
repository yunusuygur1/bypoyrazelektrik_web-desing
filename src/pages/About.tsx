import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Users, Clock, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenlik",
      description: "Tüm işlerimizde güvenlik standartlarını en üst seviyede tutarız"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kalite",
      description: "Sadece kaliteli malzemeler kullanır, uzun ömürlü çözümler sunarız"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Güven",
      description: "Müşteri memnuniyeti odaklı hizmet anlayışımızla güveninizi kazanırız"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Zamanında",
      description: "Verdiğimiz tarihlerde işlerinizi eksiksiz tamamlarız"
    }
  ];

  const achievements = [
    "500+ Tamamlanan Proje",
    "20 Yıllık Sektör Deneyimi", 
    "%100 Müşteri Memnuniyeti",
    "7/24 Teknik Destek",
    "Garantili Hizmet Kalitesi",
    "Uzman Teknik Ekip"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl mb-8 slide-in-left opacity-90">
              Elektrik, uydu ve kamera sistemleri konusunda güvenilir ortağınız
              <span className="font-semibold"> By Poyraz Elektrik</span>
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                By Poyraz Elektrik Hikayesi
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
               <p>
  <strong>By Poyraz Elektrik</strong> olarak, elektrik sektöründeki köklü deneyimimizi kurumsal bir vizyonla birleştirerek <strong>2005 yılında</strong> faaliyetlerimize başladık. Temel amacımız, müşterilerimize daima en <strong>kaliteli ve güvenilir</strong> elektrik hizmetlerini sunmaktır.
</p>
<p>
  5 yılı aşkın süredir edindiğimiz tecrübe ile, ev ve işyeri elektrik tesisatından uydu sistemlerine, güvenlik kameralarından acil arıza müdahalelerine kadar geniş bir yelpazede <strong>500'den fazla başarılı projeyi</strong> tamamladık.
</p>
<p>
  Teknolojinin hızla geliştiği bu çağda, ekibimiz olarak kendimizi sürekli geliştiriyor ve projelerimizde en <strong>güncel sistemleri</strong> kullanarak hizmet vermeye devam ediyoruz. Müşteri memnuniyeti ve güvenliği bizim önceliğimizdir.
</p>
              </div>
              <Button className="btn-primary mt-8" size="lg" asChild>
                <Link to="/hizmetlerim">
                  Hizmetlerimizi İnceleyin
                </Link>
              </Button>
            </div>
        <div className="slide-in-right">
     <img 
        src="images/poyrazelektrik.png"
        alt="Elektrikçi çalışırken"
        className="rounded-lg shadow-elegant img-centered w-96" 
        /* w-96 resme sabit bir genişlik verir (~384px) */
    />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Değerlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Çalışma prensiplerimizdeki temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-hover text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img 
      src="images/elektrik-tesisat-montaj-1-1024x576.jpg"
      // w-full (küçük ekran) ve w-5/6 (büyük ekranlarda %83 genişlik)
      className="rounded-lg shadow-elegant w-full lg:w-5/6 xl:w-4/5 mx-auto h-auto object-cover" 
    />
            </div>
            
            <div className="slide-in-right">
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Başarılarımız
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Yıllar içinde elde ettiğimiz başarılar ve müşteri memnuniyetimiz
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <Button className="btn-primary mt-8" size="lg" asChild>
                <Link to="/referanslar">
                  Referanslarımızı Görün
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient fade-in">
              Misyonumuz
            </h2>
            <p className="text-xl text-muted-foreground mb-8 slide-in-left">
              Elektrik, uydu ve kamera sistemleri konusunda en kaliteli hizmeti sunarak, 
              müşterilerimizin hayatını daha güvenli ve konforlu hale getirmek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center fade-in">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">İnovasyon</h3>
                <p className="text-muted-foreground">
                  En son teknolojileri takip ederek çözümler sunarız
                </p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Müşteri Odaklılık</h3>
                <p className="text-muted-foreground">
                  Her projede müşteri memnuniyetini önceliğimizdir
                </p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mükemmellik</h3>
                <p className="text-muted-foreground">
                  Her işte en yüksek kalite standartlarını hedefleriz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;