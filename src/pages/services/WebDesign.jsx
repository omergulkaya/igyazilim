import React from 'react';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  const features = [
    { icon: 'fas fa-mobile-alt', title: 'Responsive Tasarım', desc: 'Tüm cihazlarda mükemmel görünüm' },
    { icon: 'fas fa-search', title: 'SEO Optimize', desc: 'Arama motorlarında üst sıralarda' },
    { icon: 'fas fa-tachometer-alt', title: 'Hızlı Yükleme', desc: 'Optimize edilmiş performans' },
    { icon: 'fas fa-shield-alt', title: 'Güvenli', desc: 'SSL sertifikası ve güvenlik' },
    { icon: 'fas fa-cog', title: 'Özelleştirilebilir', desc: 'İhtiyaçlarınıza özel tasarım' },
    { icon: 'fas fa-headset', title: 'Teknik Destek', desc: '7/24 destek hizmeti' },
  ];

  const technologies = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'WordPress', 'PHP', 'Node.js'];

  const process = [
    { step: '01', title: 'Planlama', desc: 'İhtiyaç analizi ve proje planlaması' },
    { step: '02', title: 'Tasarım', desc: 'UI/UX tasarım ve prototip oluşturma' },
    { step: '03', title: 'Geliştirme', desc: 'Kodlama ve fonksiyonel geliştirme' },
    { step: '04', title: 'Test', desc: 'Kapsamlı test ve optimizasyon' },
    { step: '05', title: 'Yayın', desc: 'Canlı ortama aktarım ve yayınlama' },
    { step: '06', title: 'Destek', desc: 'Sürekli bakım ve güncelleme' },
  ];

  const packages = [
    {
      name: 'Başlangıç',
      price: '2.999₺',
      features: ['5 Sayfa', 'Responsive Tasarım', 'Temel SEO', 'İletişim Formu', '1 Aylık Destek'],
    },
    {
      name: 'Profesyonel',
      price: '7.999₺',
      popular: true,
      features: ['15 Sayfa', 'Custom Tasarım', 'Gelişmiş SEO', 'Blog Sistemi', 'Admin Paneli', '3 Aylık Destek'],
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      features: ['Sınırsız Sayfa', 'Premium Tasarım', 'E-Ticaret', 'Çoklu Dil', 'API Entegrasyonu', '1 Yıllık Destek'],
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                Web Tasarım & Geliştirme
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Profesyonel Web Tasarım Hizmetleri
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Modern, responsive ve SEO uyumlu web siteleri ile dijital dünyada fark yaratın. 
              İşletmenizi online dünyaya taşıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Teklif Alın
              </Link>
              <Link to="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                Portfolyo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Neden <span className="text-flamingo">Web Tasarımımız?</span>
            </h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              Modern teknolojiler ve profesyonel yaklaşımla işletmeniz için en iyi web sitesini oluşturuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-3xl text-flamingo`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gunsmoke">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Çalışma <span className="text-flamingo">Sürecimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl font-display font-bold text-flamingo mb-4 opacity-20">{item.step}</div>
                <h3 className="font-display font-bold text-2xl mb-3">{item.title}</h3>
                <p className="text-gunsmoke">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Kullandığımız <span className="text-flamingo">Teknolojiler</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-gray-100 text-custom-black rounded-full font-semibold hover:bg-flamingo hover:text-white transition-all cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Paket <span className="text-flamingo">Fiyatları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 ${pkg.popular ? 'border-4 border-flamingo shadow-2xl transform scale-105' : 'border-2 border-gray-100'}`}>
                {pkg.popular && (
                  <div className="bg-flamingo text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    Popüler
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-flamingo mb-6">{pkg.price}</div>
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

      {/* CTA */}
      <section className="section-padding bg-custom-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Web Sitenizi Oluşturmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <Link to="/contact" className="inline-block bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-flamingo transition-all">
            Ücretsiz Teklif Alın
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;

