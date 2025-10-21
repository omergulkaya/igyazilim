import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: '15 yıllık deneyim ile dijital dönüşüm ve inovasyon lideri.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Ayşe Demir',
      role: 'Kreatif Direktör',
      image: 'https://i.pravatar.cc/300?img=45',
      bio: 'Ödüllü tasarımları ve yaratıcı vizyonu ile projelere öncülük ediyor.',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Mehmet Kaya',
      role: 'Baş Geliştirici',
      image: 'https://i.pravatar.cc/300?img=33',
      bio: 'Full-stack geliştirme konusunda uzman, modern teknolojilere hakim.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: 'Zeynep Arslan',
      role: 'UX/UI Tasarımcı',
      image: 'https://i.pravatar.cc/300?img=47',
      bio: 'Kullanıcı deneyimi odaklı, detaycı ve yenilikçi tasarım yaklaşımı.',
      social: {
        linkedin: '#',
        dribbble: '#',
        behance: '#',
      },
    },
    {
      name: 'Can Öztürk',
      role: 'Dijital Pazarlama Uzmanı',
      image: 'https://i.pravatar.cc/300?img=15',
      bio: 'SEO ve dijital strateji konusunda uzman, sonuç odaklı yaklaşım.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Elif Şahin',
      role: 'Proje Yöneticisi',
      image: 'https://i.pravatar.cc/300?img=20',
      bio: 'Agile metodolojileri ile başarılı proje yönetimi deneyimi.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'İnovasyon',
      description: 'Sürekli yenilik ve gelişim anlayışıyla projelerimizi hayata geçiriyoruz.',
      color: 'flamingo',
    },
    {
      icon: 'fas fa-award',
      title: 'Kalite',
      description: 'Her projede mükemmeliyeti hedefliyor, en yüksek standartları uyguluyoruz.',
      color: 'supernova',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Güven',
      description: 'Müşterilerimizle uzun vadeli, güvene dayalı ilişkiler kuruyoruz.',
      color: 'hacienda',
    },
    {
      icon: 'fas fa-users',
      title: 'Takım Çalışması',
      description: 'Güçlü ekip ruhu ve iş birliği ile başarıya ulaşıyoruz.',
      color: 'tonys-pink',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Kuruluş',
      description: 'Creative Studio, dijital dünyada fark yaratmak için yola çıktı.',
    },
    {
      year: '2017',
      title: 'İlk 50 Proje',
      description: 'İlk iki yılda 50\'den fazla başarılı proje teslim ettik.',
    },
    {
      year: '2019',
      title: 'Ekip Genişlemesi',
      description: 'Ekibimizi güçlendirdik ve yeni ofisimize taşındık.',
    },
    {
      year: '2021',
      title: 'Uluslararası Projeler',
      description: 'Uluslararası müşterilerle çalışmaya başladık.',
    },
    {
      year: '2023',
      title: 'Ödüller',
      description: 'Sektördeki başarılarımızla birçok ödüle layık görüldük.',
    },
    {
      year: '2024',
      title: 'Yeni Teknolojiler',
      description: 'AI ve ML teknolojilerini projelerimize entegre ettik.',
    },
  ];

  const stats = [
    { number: '250+', label: 'Tamamlanan Proje', icon: 'fas fa-project-diagram' },
    { number: '180+', label: 'Mutlu Müşteri', icon: 'fas fa-smile' },
    { number: '15+', label: 'Ödül', icon: 'fas fa-trophy' },
    { number: '8+', label: 'Yıl Deneyim', icon: 'fas fa-clock' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-supernova opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 animate-fadeInUp">
            <h1 className="font-display font-bold text-5xl md:text-6xl">
              Hakkımızda
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              2015 yılından beri dijital dünyada fark yaratan projeler üretiyoruz. 
              Tutkulu ekibimiz ve yenilikçi yaklaşımımızla müşterilerimizin başarısına katkıda bulunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black">
                Hikayemiz
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
              <p className="text-lg text-gunsmoke leading-relaxed">
                Creative Studio, 2015 yılında dijital dünyada fark yaratmak isteyen bir grup tutkulu profesyonel 
                tarafından kuruldu. Küçük bir ekip olarak başladığımız yolculukta, her projede mükemmeliyeti 
                hedefleyerek bugünkü konumumuza ulaştık.
              </p>
              <p className="text-lg text-gunsmoke leading-relaxed">
                Bugün, 30'dan fazla uzman ekip üyemizle Türkiye'nin ve dünyanın dört bir yanındaki müşterilerimize 
                hizmet veriyoruz. Web tasarımından mobil uygulama geliştirmeye, dijital pazarlamadan marka 
                kimliğine kadar geniş bir yelpazede çözümler sunuyoruz.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">
                  Bizimle Çalışın
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  Portfolyo
                </Link>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Ekip Çalışması"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <i className="fas fa-users text-white text-2xl"></i>
                    </div>
                    <div>
                      <div className="font-display font-bold text-3xl text-custom-black">30+</div>
                      <div className="text-gunsmoke">Ekip Üyesi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Değerlerimiz
            </h2>
            <p className="text-lg text-white/90">
              Başarımızın temelinde yatan değerler ve ilkelerimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover-lift card-glow"
              >
                <div className={`w-20 h-20 bg-${value.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${value.icon} text-4xl text-${value.color}`}></i>
                </div>
                <h3 className="font-display font-bold text-xl text-custom-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gunsmoke leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-custom-black">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl bg-cape-cod/50 hover:bg-gradient-primary transition-all duration-300 transform hover:scale-105 card-glow"
              >
                <i className={`${stat.icon} text-4xl text-flamingo`}></i>
                <div className="font-display font-bold text-4xl md:text-5xl text-white">{stat.number}</div>
                <div className="text-gunsmoke font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
              Yolculuğumuz
            </h2>
            <p className="text-lg text-gunsmoke">
              2015'ten bugüne kadar geçen sürede ulaştığımız önemli kilometre taşları.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover-lift max-w-md ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center font-display font-bold text-white text-xl mr-4">
                        {item.year}
                      </div>
                      <h3 className="font-display font-bold text-xl text-custom-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gunsmoke leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-supernova rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-custom-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Ekibimiz
            </h2>
            <p className="text-lg text-gunsmoke">
              Başarımızın arkasındaki tutkulu ve yetenekli profesyoneller.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-cape-cod rounded-2xl overflow-hidden hover-lift card-glow"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-custom-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display font-bold text-2xl mb-1">{member.name}</h3>
                    <p className="text-supernova font-semibold mb-3">{member.role}</p>
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-primary transition-all duration-300"
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gunsmoke leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-supernova rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Ekibimize Katılmak İster misiniz?
            </h2>
            <p className="text-xl text-white/90">
              Yetenekli ve tutkulu profesyoneller arıyoruz. Kariyer fırsatları için iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-flamingo font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                İletişime Geç
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <a
                href="mailto:careers@creativestudio.com"
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-flamingo"
              >
                <i className="fas fa-envelope mr-2"></i>
                Kariyer Fırsatları
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

