import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Tasarım & Geliştirme',
      shortDesc: 'Modern ve responsive web siteleri',
      description: 'Kurumsal web siteleri, e-ticaret platformları ve özel web uygulamaları geliştiriyoruz. React, Vue.js ve modern teknolojilerle performanslı çözümler sunuyoruz.',
      features: [
        'Responsive Tasarım',
        'SEO Optimizasyonu',
        'Hızlı Yükleme Süreleri',
        'Modern UI/UX Tasarım',
        'Admin Paneli',
        'Güvenlik Optimizasyonu'
      ],
      color: 'flamingo',
      bgGradient: 'from-flamingo to-supernova',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobil Uygulama Geliştirme',
      shortDesc: 'iOS ve Android için native uygulamalar',
      description: 'Kullanıcı dostu ve performanslı mobil uygulamalar geliştiriyoruz. React Native ve Flutter ile cross-platform çözümler sunuyoruz.',
      features: [
        'iOS & Android Uyumluluk',
        'Native Performans',
        'Push Notifications',
        'Offline Çalışma',
        'Cloud Entegrasyonu',
        'App Store Yayınlama'
      ],
      color: 'supernova',
      bgGradient: 'from-supernova to-hacienda',
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Ticaret Çözümleri',
      shortDesc: 'Online satış platformları',
      description: 'Güvenli ve kullanıcı dostu e-ticaret siteleri oluşturuyoruz. Ödeme sistemleri, stok yönetimi ve raporlama özellikleriyle tam entegre çözümler.',
      features: [
        'Güvenli Ödeme Sistemi',
        'Stok Yönetimi',
        'Sipariş Takibi',
        'Çoklu Dil Desteği',
        'Mobil Uyumlu',
        'Analytics Entegrasyonu'
      ],
      color: 'hacienda',
      bgGradient: 'from-hacienda to-flamingo',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Dijital Pazarlama',
      shortDesc: 'SEO, SEM ve sosyal medya yönetimi',
      description: 'Markanızı dijital dünyada güçlendiriyoruz. SEO, Google Ads, sosyal medya reklamları ve içerik pazarlama stratejileri ile görünürlüğünüzü artırıyoruz.',
      features: [
        'SEO Optimizasyonu',
        'Google Ads Yönetimi',
        'Social Media Marketing',
        'İçerik Pazarlama',
        'Email Marketing',
        'Analytics & Raporlama'
      ],
      color: 'tonys-pink',
      bgGradient: 'from-tonys-pink to-flamingo',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Marka & Grafik Tasarım',
      shortDesc: 'Logo, kurumsal kimlik ve görsel tasarım',
      description: 'Markanızı öne çıkaran benzersiz tasarımlar oluşturuyoruz. Logo tasarımı, kurumsal kimlik, broşür ve sosyal medya görselleri.',
      features: [
        'Logo Tasarımı',
        'Kurumsal Kimlik',
        'Broşür & Katalog',
        'Sosyal Medya Görselleri',
        'Ambalaj Tasarımı',
        'İllüstrasyon'
      ],
      color: 'flamingo',
      bgGradient: 'from-flamingo to-tonys-pink',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Bakım & Destek',
      shortDesc: '7/24 teknik destek ve güncelleme hizmeti',
      description: 'Projeniz yayına girdikten sonra da yanınızdayız. Düzenli güncellemeler, güvenlik yamaları ve teknik destek hizmeti sunuyoruz.',
      features: [
        '7/24 Teknik Destek',
        'Düzenli Güncellemeler',
        'Güvenlik İzleme',
        'Performans Optimizasyonu',
        'Backup Hizmeti',
        'Acil Müdahale'
      ],
      color: 'supernova',
      bgGradient: 'from-supernova to-flamingo',
    },
  ];

  const process = [
    {
      icon: 'fas fa-comments',
      title: 'Keşif & Planlama',
      description: 'İhtiyaçlarınızı dinliyor ve detaylı bir proje planı oluşturuyoruz.',
    },
    {
      icon: 'fas fa-pencil-ruler',
      title: 'Tasarım',
      description: 'Marka kimliğinize uygun, modern ve kullanıcı dostu tasarımlar hazırlıyoruz.',
    },
    {
      icon: 'fas fa-code',
      title: 'Geliştirme',
      description: 'En son teknolojilerle kodlama yapıyor ve sürekli test ediyoruz.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Yayınlama',
      description: 'Projenizi yayına alıyor ve başarılı bir şekilde devreye alıyoruz.',
    },
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
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Markanızı dijital dünyada öne çıkaracak kapsamlı çözümler sunuyoruz. 
              Modern teknolojiler ve yaratıcı yaklaşımlarla işinizi büyütüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift card-glow cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`bg-gradient-to-br ${service.bgGradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <i className={`${service.icon} text-5xl mb-4 relative z-10`}></i>
                  <h3 className="font-display font-bold text-2xl mb-2 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-white/90 relative z-10">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gunsmoke mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-custom-black">
                        <i className={`fas fa-check-circle text-${service.color} mr-2`}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-secondary w-full group-hover:bg-flamingo group-hover:text-white">
                    Detaylı Bilgi
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-custom-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Çalışma <span className="gradient-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-gunsmoke">
              Profesyonel ve sistematik yaklaşımımızla projenizi başarıyla tamamlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative text-center space-y-4"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-display font-bold text-white text-xl z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-cape-cod rounded-2xl p-8 pt-12 hover:bg-gradient-primary transition-all duration-300 transform hover:scale-105 group">
                  <i className={`${step.icon} text-4xl text-flamingo group-hover:text-white mb-4`}></i>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gunsmoke group-hover:text-white/90">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-flamingo to-supernova transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-custom-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
              Esnek <span className="gradient-text">Fiyatlandırma</span>
            </h2>
            <p className="text-lg text-gunsmoke">
              Her bütçeye uygun paketler ve özelleştirilebilir çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="p-8 border-b-4 border-gunsmoke">
                <h3 className="font-display font-bold text-2xl text-custom-black mb-2">
                  Başlangıç
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="font-display font-bold text-4xl text-flamingo">₺2.999</span>
                  <span className="text-gunsmoke ml-2">/ proje</span>
                </div>
                <p className="text-gunsmoke">Küçük işletmeler için ideal</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>5 Sayfa Web Sitesi</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Responsive Tasarım</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Temel SEO</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>İletişim Formu</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>30 Gün Destek</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-secondary w-full text-center block">
                  Başla
                </Link>
              </div>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
                Popüler
              </div>
              <div className="p-8 bg-gradient-primary text-white">
                <h3 className="font-display font-bold text-2xl mb-2">
                  Profesyonel
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="font-display font-bold text-4xl">₺7.999</span>
                  <span className="text-white/80 ml-2">/ proje</span>
                </div>
                <p className="text-white/90">Büyüyen işletmeler için</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>15 Sayfa Web Sitesi</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Custom Tasarım</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Gelişmiş SEO</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Blog Sistemi</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Admin Paneli</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>3 Ay Destek</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Başla
                </Link>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="p-8 border-b-4 border-hacienda">
                <h3 className="font-display font-bold text-2xl text-custom-black mb-2">
                  Kurumsal
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="font-display font-bold text-4xl text-flamingo">Özel</span>
                </div>
                <p className="text-gunsmoke">Büyük şirketler için</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Sınırsız Sayfa</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Premium Tasarım</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>Özel Geliştirme</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>E-Ticaret Entegrasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>API Entegrasyonları</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-flamingo mr-3 mt-1"></i>
                    <span>1 Yıl Destek</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-secondary w-full text-center block">
                  İletişime Geç
                </Link>
              </div>
            </div>
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
              Hizmetlerimiz Hakkında Daha Fazla Bilgi İster misiniz?
            </h2>
            <p className="text-xl text-white/90">
              Uzman ekibimizle ücretsiz danışmanlık alın ve projeniz için en uygun çözümü bulalım.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-flamingo font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Ücretsiz Danışmanlık
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link to="/portfolio" className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-flamingo">
                Çalışmalarımızı Görün
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

