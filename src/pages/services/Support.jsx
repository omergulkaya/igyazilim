import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  const services = [
    { icon: 'fas fa-sync', title: 'Düzenli Güncellemeler', desc: 'WordPress, plugin ve tema güncellemeleri' },
    { icon: 'fas fa-shield-alt', title: 'Güvenlik Takibi', desc: 'Güvenlik taraması ve koruma' },
    { icon: 'fas fa-database', title: 'Yedekleme', desc: 'Otomatik yedekleme ve geri yükleme' },
    { icon: 'fas fa-tachometer-alt', title: 'Performans Optimizasyonu', desc: 'Hız ve performans iyileştirmeleri' },
    { icon: 'fas fa-bug', title: 'Hata Giderme', desc: 'Teknik sorunların hızlı çözümü' },
    { icon: 'fas fa-headset', title: '7/24 Destek', desc: 'Kesintisiz teknik destek hizmeti' },
  ];

  const packages = [
    {
      name: 'Temel Bakım',
      price: '499₺',
      period: '/ay',
      features: [
        'Aylık güncelleme',
        'Haftalık yedekleme',
        'Temel güvenlik taraması',
        'Email desteği',
        'Uptime monitoring',
        '2 saat teknik destek',
      ],
    },
    {
      name: 'Profesyonel Bakım',
      price: '999₺',
      period: '/ay',
      popular: true,
      features: [
        'Haftalık güncelleme',
        'Günlük yedekleme',
        'Gelişmiş güvenlik',
        'Öncelikli destek',
        'Performans raporu',
        '5 saat teknik destek',
        'SEO takibi',
      ],
    },
    {
      name: 'Kurumsal Bakım',
      price: '1.999₺',
      period: '/ay',
      features: [
        'Günlük güncelleme',
        'Anlık yedekleme',
        'Premium güvenlik',
        '7/24 destek',
        'Detaylı analiz',
        'Sınırsız teknik destek',
        'SEO optimizasyonu',
        'İçerik güncellemeleri',
      ],
    },
  ];

  const maintenanceItems = [
    'WordPress core güncellemeleri',
    'Plugin ve tema güncellemeleri',
    'Güvenlik yamalarının uygulanması',
    'Veritabanı optimizasyonu',
    'Bozuk linklerin düzeltilmesi',
    'Spam temizliği',
    'Site hızı optimizasyonu',
    'SSL sertifika takibi',
  ];

  const benefits = [
    { title: 'Kesintisiz Çalışma', desc: 'Siteniz her zaman aktif ve erişilebilir', icon: 'fas fa-check-circle' },
    { title: 'Güvenli Altyapı', desc: 'Güvenlik tehditlerine karşı korunma', icon: 'fas fa-shield-alt' },
    { title: 'Yüksek Performans', desc: 'Hızlı yükleme ve optimize edilmiş kod', icon: 'fas fa-rocket' },
    { title: 'Güncel Teknoloji', desc: 'En son sürümler ve özellikler', icon: 'fas fa-sync-alt' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                Bakım & Destek
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Web Sitesi Bakım ve Destek Hizmetleri
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Sitenizin güvenli, hızlı ve güncel kalması için profesyonel bakım ve 7/24 teknik destek hizmeti sunuyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Paket Seç
              </Link>
              <a href="tel:+905070025649" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                Acil Destek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Bakım & Destek <span className="text-flamingo">Hizmetlerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-flamingo`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gunsmoke">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Items */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
                Kapsamlı <span className="text-flamingo">Bakım Hizmeti</span>
              </h2>
              <p className="text-lg text-gunsmoke mb-8">
                Web sitenizin sorunsuz çalışması için gereken tüm bakım işlemlerini düzenli olarak yapıyoruz.
              </p>
              <ul className="space-y-4">
                {maintenanceItems.map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-flamingo rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <i className="fas fa-cogs text-9xl text-flamingo opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Düzenli Bakımın <span className="text-flamingo">Avantajları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gunsmoke">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Bakım <span className="text-flamingo">Paketleri</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 ${pkg.popular ? 'border-4 border-flamingo shadow-2xl transform scale-105' : 'border-2 border-gray-100'}`}>
                {pkg.popular && (
                  <div className="bg-flamingo text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    En Popüler
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-flamingo">{pkg.price}</span>
                  <span className="text-gunsmoke">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="fas fa-check-circle text-flamingo mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${pkg.popular ? 'bg-flamingo text-white hover:bg-custom-black' : 'border-2 border-flamingo text-flamingo hover:bg-flamingo hover:text-white'}`}>
                  Başla
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="section-padding bg-custom-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-flamingo rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-phone-alt text-3xl text-white"></i>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Acil Teknik Destek
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sitenizde acil bir sorun mu var? 7/24 teknik destek ekibimiz hemen yardımcı olabilir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+905070025649" className="bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-flamingo transition-all">
                <i className="fas fa-phone mr-2"></i>
                Hemen Ara: 0507 002 56 49
              </a>
              <a href="https://wa.me/905070025649" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-custom-black transition-all">
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp Destek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
            Sitenizi Güvende Tutun
          </h2>
          <p className="text-xl text-gunsmoke mb-8 max-w-2xl mx-auto">
            Profesyonel bakım paketlerimiz ile web sitenizin her zaman güncel ve güvenli olmasını sağlayın.
          </p>
          <Link to="/contact" className="inline-block bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-custom-black transition-all">
            Bakım Paketi Seç
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Support;

