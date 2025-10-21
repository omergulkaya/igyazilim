import React from 'react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const features = [
    { icon: 'fas fa-shopping-cart', title: 'Gelişmiş Alışveriş Sepeti', desc: 'Kullanıcı dostu sepet yönetimi' },
    { icon: 'fas fa-credit-card', title: 'Ödeme Entegrasyonu', desc: 'Güvenli ödeme sistemleri' },
    { icon: 'fas fa-boxes', title: 'Stok Yönetimi', desc: 'Otomatik stok takibi ve uyarılar' },
    { icon: 'fas fa-truck', title: 'Kargo Entegrasyonu', desc: 'Tüm kargo firmaları ile entegrasyon' },
    { icon: 'fas fa-users', title: 'Müşteri Yönetimi', desc: 'CRM ve müşteri profili yönetimi' },
    { icon: 'fas fa-chart-bar', title: 'Raporlama', desc: 'Detaylı satış ve analiz raporları' },
  ];

  const platforms = [
    { name: 'WooCommerce', desc: 'WordPress tabanlı esnek e-ticaret', icon: 'fab fa-wordpress' },
    { name: 'Shopify', desc: 'Hızlı başlangıç için ideal', icon: 'fab fa-shopify' },
    { name: 'Magento', desc: 'Kurumsal çözümler için', icon: 'fas fa-store' },
    { name: 'Custom', desc: 'Özel yazılım geliştirme', icon: 'fas fa-code' },
  ];

  const integrations = [
    'İyzico, PayTR ödeme sistemleri',
    'MNG, Yurtiçi, Aras Kargo',
    'n11, Hepsiburada, Trendyol',
    'Google Analytics, Facebook Pixel',
    'SMS ve Email bildirimleri',
    'Sosyal medya entegrasyonu',
  ];

  const packages = [
    {
      name: 'Temel E-Ticaret',
      price: '9.999₺',
      features: ['100 Ürün', 'Responsive Tasarım', 'Ödeme Entegrasyonu', 'Admin Paneli', 'SEO Optimizasyonu', '3 Aylık Destek'],
    },
    {
      name: 'Profesyonel E-Ticaret',
      price: '19.999₺',
      popular: true,
      features: ['Sınırsız Ürün', 'Custom Tasarım', 'Kargo Entegrasyonu', 'SMS Bildirimleri', 'Pazaryeri Entegrasyonu', 'Mobil Uygulama', '6 Aylık Destek'],
    },
    {
      name: 'Kurumsal E-Ticaret',
      price: 'Özel',
      features: ['B2B & B2C', 'Çoklu Mağaza', 'ERP Entegrasyonu', 'Özel Yazılım', 'API Geliştirme', 'Sınırsız Destek'],
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                E-Ticaret Çözümleri
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Kapsamlı E-Ticaret Yazılımı
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Online satışlarınızı artırmak için profesyonel e-ticaret siteleri ve yönetim sistemleri geliştiriyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Demo Talep Et
              </Link>
              <Link to="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                E-Ticaret Projeleri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              E-Ticaret <span className="text-flamingo">Platformları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-flamingo hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-flamingo bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${platform.icon} text-4xl text-flamingo`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{platform.name}</h3>
                <p className="text-gunsmoke text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              E-Ticaret <span className="text-flamingo">Özellikleri</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
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

      {/* Integrations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <i className="fas fa-shopping-bag text-9xl text-flamingo opacity-20"></i>
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
                Güçlü <span className="text-flamingo">Entegrasyonlar</span>
              </h2>
              <p className="text-lg text-gunsmoke mb-8">
                E-ticaret sitenizi tüm popüler platformlar ve hizmetlerle entegre ediyoruz.
              </p>
              <ul className="space-y-4">
                {integrations.map((integration, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-flamingo rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-plug text-white text-sm"></i>
                    </div>
                    <span>{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              E-Ticaret <span className="text-flamingo">Paketleri</span>
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
                  Hemen Başla
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
            E-Ticaret Sitenizi Kurmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Online satış yapmaya hemen başlayın. Ücretsiz danışmanlık için bize ulaşın.
          </p>
          <Link to="/contact" className="inline-block bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-flamingo transition-all">
            Ücretsiz Danışmanlık
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;

