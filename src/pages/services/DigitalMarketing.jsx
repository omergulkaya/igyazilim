import React from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const services = [
    { icon: 'fas fa-search', title: 'SEO (Arama Motoru Optimizasyonu)', desc: 'Google\'da üst sıralarda yer alın' },
    { icon: 'fas fa-ad', title: 'Google Ads', desc: 'Hedefli reklam kampanyaları' },
    { icon: 'fab fa-facebook', title: 'Sosyal Medya Reklamları', desc: 'Facebook, Instagram, LinkedIn' },
    { icon: 'fas fa-envelope', title: 'Email Marketing', desc: 'Etkili email kampanyaları' },
    { icon: 'fas fa-pen', title: 'İçerik Pazarlama', desc: 'SEO uyumlu blog ve içerik' },
    { icon: 'fas fa-chart-line', title: 'Analiz ve Raporlama', desc: 'Detaylı performans analizi' },
  ];

  const seoServices = [
    'Anahtar kelime araştırması',
    'On-page SEO optimizasyonu',
    'Teknik SEO denetimi',
    'Link building stratejisi',
    'Yerel SEO optimizasyonu',
    'Rakip analizi ve strateji',
  ];

  const socialPlatforms = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', color: 'text-blue-600' },
    { name: 'Instagram', icon: 'fab fa-instagram', color: 'text-pink-600' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: 'text-blue-700' },
    { name: 'Twitter', icon: 'fab fa-twitter', color: 'text-blue-400' },
    { name: 'YouTube', icon: 'fab fa-youtube', color: 'text-red-600' },
    { name: 'TikTok', icon: 'fab fa-tiktok', color: 'text-gray-900' },
  ];

  const benefits = [
    { title: 'Marka Bilinirliği', desc: 'Online görünürlüğünüzü artırın', icon: 'fas fa-bullhorn' },
    { title: 'Hedefli Trafik', desc: 'Doğru kitleye ulaşın', icon: 'fas fa-users' },
    { title: 'Dönüşüm Oranı', desc: 'Satışlarınızı artırın', icon: 'fas fa-chart-line' },
    { title: 'ROI Artışı', desc: 'Yatırım getirinizi maksimize edin', icon: 'fas fa-coins' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-custom-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-flamingo rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-flamingo text-white rounded-full text-sm font-semibold">
                Dijital Pazarlama
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              360° Dijital Pazarlama Çözümleri
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              SEO, Google Ads, sosyal medya ve içerik pazarlama ile işletmenizi dijital dünyada öne çıkarıyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-flamingo transition-all">
                Kampanya Başlat
              </Link>
              <a href="tel:+905070025649" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-custom-black transition-all">
                Hemen Arayın
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
              Dijital Pazarlama <span className="text-flamingo">Hizmetlerimiz</span>
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

      {/* SEO Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
                SEO ile <span className="text-flamingo">Google'da Birinci</span>
              </h2>
              <p className="text-lg text-gunsmoke mb-8">
                Profesyonel SEO hizmetlerimizle web sitenizi arama motorlarında üst sıralara taşıyoruz.
              </p>
              <ul className="space-y-4">
                {seoServices.map((service, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-flamingo rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block mt-8 bg-flamingo text-white px-8 py-4 rounded-full font-semibold hover:bg-custom-black transition-all">
                SEO Analizi Al
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <i className="fas fa-search text-9xl text-flamingo opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Sosyal Medya <span className="text-flamingo">Platformları</span>
            </h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              Tüm sosyal medya platformlarında profesyonel reklam yönetimi ve içerik stratejisi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-flamingo hover:shadow-xl transition-all">
                <div className={`text-5xl mb-3 ${platform.color}`}>
                  <i className={platform.icon}></i>
                </div>
                <h3 className="font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-4">
              Dijital Pazarlama <span className="text-flamingo">Faydaları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-flamingo rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gunsmoke">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-custom-black text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-flamingo mb-2">%200+</div>
              <div className="text-gray-300">Ortalama Trafik Artışı</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-flamingo mb-2">%150+</div>
              <div className="text-gray-300">Dönüşüm Oranı Artışı</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-flamingo mb-2">500+</div>
              <div className="text-gray-300">Başarılı Kampanya</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-flamingo mb-2">%98</div>
              <div className="text-gray-300">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-custom-black mb-6">
            Dijital Pazarlama ile <span className="text-flamingo">Büyümeye Başlayın</span>
          </h2>
          <p className="text-xl text-gunsmoke mb-8 max-w-2xl mx-auto">
            Ücretsiz dijital pazarlama danışmanlığı için hemen iletişime geçin.
          </p>
          <Link to="/contact" className="inline-block bg-flamingo text-white px-10 py-4 rounded-full font-bold hover:bg-custom-black transition-all">
            Ücretsiz Danışmanlık
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;

